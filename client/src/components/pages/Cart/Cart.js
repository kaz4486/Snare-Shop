import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCart } from '../../../redux/cartRedux';
import CartBox from '../../features/CartBox/CartBox';

const Cart = () => {
  const cart = useSelector(getCart);
  const navigate = useNavigate();

  console.log(cart);

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
      <Button onClick={handleCheckoutClick}>checkout</Button>
    </Container>
  );
};

export default Cart;
