import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCart, getCartTotal, loadCart } from '../../../redux/cartRedux';
import CartBox from '../../features/CartBox/CartBox';
import { useEffect } from 'react';
import Button from '../../common/Button/Button';
import ProductBar from '../../common/ProductBar/ProductBar';
import styles from './Cart.module.scss';

const Cart = () => {
  const cart = useSelector(getCart);
  const cartTotal = useSelector(getCartTotal);
  const dispatch = useDispatch();

  console.log(cart);

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

  if (!cart.length) return <p>no products</p>;
  return (
    <Container>
      <div className={styles.products_section}>
        <ProductBar />
        {cart.map((product) => (
          <div key={product.id}>
            <CartBox
              product={product}
              key={product.id}
              // setProductOrder={setProductOrder}
            />
          </div>
        ))}
      </div>
      <div className={styles.price_section}>
        <Row>
          <span>Total price: $ {cartTotal}</span>
        </Row>
        {/* <Button onClick={handleCheckoutClick}>checkout</Button> */}
        <Button onClick={handleCheckoutClick}>Checkout</Button>
      </div>
    </Container>
  );
};

export default Cart;
