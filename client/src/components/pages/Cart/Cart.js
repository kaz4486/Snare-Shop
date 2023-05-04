import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  getCart,
  getCartTotal,
  loadCart,
  removeFromCart,
  updateProductCartAmount,
  updateProductCartComment,
} from '../../../redux/cartRedux';
import CartBox from '../../features/CartBox/CartBox';
import { useEffect } from 'react';
import Button from '../../common/Button/Button';
import ProductBar from '../../common/ProductBar/ProductBar';
import styles from './Cart.module.scss';
import { useState } from 'react';
import AmountWidget from '../../features/AmountWidget/AmountWidget';

const Cart = () => {
  const cart = useSelector(getCart);
  const cartTotal = useSelector(getCartTotal);
  const dispatch = useDispatch();

  // const cartProducts = JSON.parse(localStorage.getItem('cart'));
  // console.log(cartProducts);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  // const [productOrder, setProductOrder] = useState({});

  // // const orders = [];
  // const order = [];
  // console.log(order);

  // useEffect(() => {
  //   order.push(productOrder);
  // }, [productOrder]);

  // const prepareOrder = (productOrder) => {
  //   orders.push(productOrder);
  // };

  const handleCheckoutClick = () => {
    navigate('/checkout');
  };

  // cartbox

  const [productAmount, setProductAmount] = useState(cart.product?.count);
  console.log(productAmount);
  const [comment, setComment] = useState(cart.product?.comment);

  //   const [order, setOrder] = useState({
  //     name: product.name,
  //     price: product.price,
  //     amount: productAmount,
  //     additionalInfo: additionalInfo,
  //   });

  //   useEffect(() => {
  //     setProductOrder(order);
  //   }, [order]);

  useEffect(() => {
    dispatch(updateProductCartComment({ id: cart.product?.id, comment }));
  }, [comment, dispatch, cart.product?.id]);

  // const handleRemoveBox = (e) => {
  //   e.preventDefault();
  //   dispatch(removeFromCart(cart.product?.id));
  // };

  // const handleAmountChange = (newAmount) => {
  //   setProductAmount(newAmount);
  //   dispatch(
  //     updateProductCartAmount({
  //       id: cart.product?.id,
  //       count: newAmount,
  //       totalPrice: cart.product?.price * newAmount,
  //     }),
  //   );
  // };

  if (!cart.length)
    return (
      <Container>
        <h4 className={styles.heading}>Your cart is empty!</h4>
      </Container>
    );
  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.table_head}>
          <tr>
            <th className={styles.table_th_center}>Product</th>
            <th className={styles.table_th_center}>Price</th>
            <th className={styles.table_th_center}>Amount</th>
            <th className={styles.table_th_center}>Comment</th>
            <th className={styles.table_th_center}>Product price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <CartBox
              product={product}
              key={product.id}
              // setProductOrder={setProductOrder}
            />
          ))}
        </tbody>
      </table>

      <div className={styles.price_section}>
        <Row>
          <span>Total price: $ {cartTotal}</span>
        </Row>

        <Button onClick={handleCheckoutClick}>Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
