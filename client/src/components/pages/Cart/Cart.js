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
import ProductBar from '../../common/ProductBar/CartProducts';
import styles from './Cart.module.scss';
import { useState } from 'react';
import AmountWidget from '../../features/AmountWidget/AmountWidget';
import CartProducts from '../../common/ProductBar/CartProducts';

const Cart = () => {
  const cart = useSelector(getCart);
  const cartTotal = useSelector(getCartTotal);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  const handleCheckoutClick = () => {
    navigate('/checkout');
  };

  const [productAmount, setProductAmount] = useState(cart.product?.count);
  const [comment, setComment] = useState(cart.product?.comment);

  useEffect(() => {
    dispatch(updateProductCartComment({ id: cart.product?.id, comment }));
  }, [comment, dispatch, cart.product?.id]);

  if (!cart.length)
    return (
      <Container>
        <h4 className={styles.heading}>Your cart is empty!</h4>
      </Container>
    );
  return (
    <div>
      <CartProducts removeButton={true} />

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
