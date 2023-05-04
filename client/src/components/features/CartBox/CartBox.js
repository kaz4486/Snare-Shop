import { Row, Col } from 'react-bootstrap';
import styles from '../CartBox/CartBox.module.scss';
import AmountWidget from '../../features/AmountWidget/AmountWidget';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  removeFromCart,
  updateProductCartAmount,
  updateProductCartComment,
} from '../../../redux/cartRedux';
import Button from '../../common/Button/Button';

const CartBox = ({ product }) => {
  const [productAmount, setProductAmount] = useState(product.count);
  const [comment, setComment] = useState(product.comment);

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
    <tr className={styles.table_row}>
      <td>
        <Row className="p-0">
          <Col
            xs={4}
            className="d-flex justify-content-center align-items-center p-0"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/products/${product.mainPhoto}`}
              alt={product.name}
            />
          </Col>
          <Col
            xs={8}
            className="d-flex justify-content-start align-items-center p-0"
          >
            <span>{product.name}</span>
          </Col>
        </Row>
      </td>
      <td className={styles.table_td_bg_dark}>
        <span>{product.price}</span>
      </td>
      <td className={styles.table_td_bg_white}>
        <AmountWidget
          value={productAmount}
          handleAmountChange={handleAmountChange}
        />
      </td>
      <td className={styles.table_td_bg_dark}>
        <span>$ {product.price * productAmount}</span>
      </td>
      <td className={styles.table_td_bg_white}>
        {' '}
        <form>
          <textarea
            className={styles.info_input}
            type="textarea"
            placeholder="Insert addition informations"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </form>
      </td>
      <td className={styles.table_td_bg_dark}>
        <Button onClick={handleRemoveBox}> Remove </Button>
      </td>
    </tr>
  );
};

export default CartBox;
