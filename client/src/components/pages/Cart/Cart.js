import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCart, getCartTotal, loadCart } from '../../../redux/cartRedux';
import CartBox from '../../features/CartBox/CartBox';
import { useEffect } from 'react';

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
      <Row className="cart bar">
        <Col sm={6}>
          <span>Products</span>
        </Col>
        <Col sm={2}>
          <span>Price</span>
        </Col>
        <Col sm={2}>
          <span>Amount</span>
        </Col>
        <Col sm={2}>
          <span>Total price</span>
        </Col>
      </Row>
      {cart.map((product) => (
        <div key={product.id}>
          <CartBox
            product={product}
            key={product.id}
            // setProductOrder={setProductOrder}
          />
        </div>
      ))}
      <Row>
        <span>Total price: {cartTotal}</span>
      </Row>
      <Button onClick={handleCheckoutClick}>checkout</Button>
    </Container>
  );
};

export default Cart;
