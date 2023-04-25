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
        <img
          src={`${process.env.PUBLIC_URL}/images/products/${product.mainPhoto}`}
          alt={product.name}
        />
        <span>{product.name}</span>
      </td>
      <td className={styles.table_td_center}>
        <span>{product.price}</span>
      </td>
      <td className={styles.table_td_center}>
        <AmountWidget
          value={productAmount}
          handleAmountChange={handleAmountChange}
        />
      </td>
      <td className={styles.table_td_center}>
        <span>$ {product.price * productAmount}</span>
      </td>
      <td className={styles.table_td_center}>
        {' '}
        <form>
          <input
            className={styles.info_input}
            type="textarea"
            placeholder="Insert addition informations"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></input>
        </form>
      </td>
      <td>
        <Button onClick={handleRemoveBox}> Remove </Button>
      </td>
    </tr>
  );
};

export default CartBox;
