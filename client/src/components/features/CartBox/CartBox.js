import { Container, Row, Col } from 'react-bootstrap';
import styles from '../CartBox/CartBox.module.scss';
import AmountWidget from '../../features/AmountWidget/AmountWidget';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCart,
  removeFromCart,
  updateProductCartAmount,
  updateProductCartComment,
} from '../../../redux/cartRedux';
import Button from '../../common/Button/Button';

const CartBox = ({ product }) => {
  const [productAmount, setProductAmount] = useState(product.count);
  const [comment, setComment] = useState(product.comment);

  //   const [order, setOrder] = useState({
  //     name: product.name,
  //     price: product.price,
  //     amount: productAmount,
  //     additionalInfo: additionalInfo,
  //   });

  //   useEffect(() => {
  //     setProductOrder(order);
  //   }, [order]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateProductCartComment({ id: product.id, comment }));
  }, [comment, dispatch, product.id]);

  const handleRemoveBox = (e) => {
    e.preventDefault();
    dispatch(removeFromCart(product.id));
  };

  const handleAmountChange = (newAmount) => {
    setProductAmount(newAmount);
    dispatch(
      updateProductCartAmount({
        id: product.id,
        count: newAmount,
        totalPrice: product.price * newAmount,
      }),
    );
  };

  return (
    <Container className={styles.product_box}>
      <Row>
        {' '}
        <div className={styles.inner_product_box}>
          <Col xs={6} className="d-flex justify-content-center">
            <span>{product.name}</span>
          </Col>
          <Col xs={2} className="d-flex justify-content-center">
            <span>{product.price}</span>
          </Col>
          <Col xs={2} className="mx-1">
            <AmountWidget
              value={productAmount}
              handleAmountChange={handleAmountChange}
            />
          </Col>
          <Col xs={2} className="d-flex justify-content-center">
            <span>$ {product.price * productAmount}</span>
          </Col>
        </div>
      </Row>
      <Row className="d-flex align-items-center justify-content-center">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <form>
            <input
              className={styles.info_input}
              type="textarea"
              placeholder="Insert addition informations"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></input>
          </form>
        </Col>
        <Col
          key={product.name}
          xs={12}
          md={6}
          className="d-flex justify-content-center"
        >
          <Button onClick={handleRemoveBox}> Remove product</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CartBox;
