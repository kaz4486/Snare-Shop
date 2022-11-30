import { Button, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getCart, getCartTotal } from '../../../redux/cartRedux';
import styles from '../Checkout/Checkout.module.scss';
import { useEffect, useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const cart = useSelector(getCart);
  const cartTotalSum = useSelector(getCartTotal);

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    house_number: '',
    city: '',
  });

  const handleSubmitOrder = () => {};

  console.log(userData);

  //imie, nazwisko, email, ulica, numer, miasto,

  const order = {
    products: cart,
    userData,
    totalPrice: cartTotalSum,
  };

  const updateTextField = ({ target }) => {
    const { value, name } = target;
    setUserData({ ...userData, [name]: value });
  };
  const updateNumberField = ({ target }) => {
    const { value, name } = target;
    setUserData({ ...userData, [name]: parseInt(value) });
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
        <div className={styles.product_box} key={product.id}>
          <Container>
            <Row>
              <Col sm={6}>
                <span>{product.name}</span>
              </Col>
              <Col sm={2}>
                <span>{product.price}</span>
              </Col>
              <Col sm={2}>
                <span>{product.amount}</span>
              </Col>
              <Col sm={2}>
                <span>{product.price * product.amount}</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>{product.comment}</p>
              </Col>
            </Row>
          </Container>
        </div>
      ))}
      <Col sm={6}>
        {' '}
        <span>{cartTotalSum}</span>
      </Col>
      <Form>
        <FormGroup>
          <Label>First name</Label>
          <Input
            type="text"
            value={userData.firstName}
            name="firstName"
            onChange={updateTextField}
            id="userFirstName"
            placeholder="John"
          />
        </FormGroup>
        <FormGroup>
          <Label>Last name</Label>
          <Input
            type="text"
            value={userData.lastName}
            name="lastName"
            onChange={updateTextField}
            id="userLastName"
            placeholder="Doe"
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            value={userData.email}
            name="email"
            onChange={updateTextField}
            id="userEmail"
            placeholder="johndoe@example.com"
          />
        </FormGroup>
        <FormGroup>
          <Label>Street</Label>
          <Input
            type="text"
            value={userData.street}
            name="street"
            onChange={updateTextField}
            id="userStreet"
            placeholder="Pawtucket Ave"
          />
        </FormGroup>
        <FormGroup>
          <Label>House number</Label>
          <Input
            type="text"
            inputmode="numeric"
            value={userData.house_number}
            name="house_number"
            onChange={updateNumberField}
            id="userCity"
            placeholder="2442"
          />
        </FormGroup>
        <FormGroup>
          <Label>City</Label>
          <Input
            type="text"
            value={userData.city}
            name="city"
            onChange={updateTextField}
            id="userCity"
            placeholder="Pawtucket"
          />
        </FormGroup>
        <Row>
          <Col sm={6}>
            <Button>Order</Button>
          </Col>
          <Col sm={6}>
            <Link to="/cart">
              <Button>Back to cart</Button>
            </Link>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Checkout;
