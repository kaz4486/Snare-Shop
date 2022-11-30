import { Button, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getCart, getCartTotal } from '../../../redux/cartRedux';
import styles from '../Checkout/Checkout.module.scss';
import { useEffect, useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const Checkout = () => {
  const cart = useSelector(getCart);
  const cartTotalSum = useSelector(getCartTotal);

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    house_number: null,
    city: '',
  });

  //imie, nazwisko, email, ulica, numer, miasto,

  const order = {
    products: cart,
    userData,
    totalPrice: cartTotalSum,
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
      <Col sm={6}>
        <Button>Order</Button>
      </Col>
      <Form>
        <FormGroup>
          <Label>First name</Label>
          <Input
            type="text"
            value={userData.firstName}
            name="userFirstName"
            id="userFirstName"
            placeholder="John"
          />
        </FormGroup>
        <FormGroup>
          <Label>Last name</Label>
          <Input
            type="text"
            value={userData.lastName}
            name="userLastName"
            id="userLastName"
            placeholder="John"
          />
        </FormGroup>
      </Form>
    </Container>
  );
};

export default Checkout;
