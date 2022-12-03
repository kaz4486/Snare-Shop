import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, getCartTotal } from '../../../redux/cartRedux';
import styles from '../Checkout/Checkout.module.scss';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import { createOrderRequest } from '../../../redux/orderRedux';
import { useForm } from 'react-hook-form';

const Checkout = () => {
  const cart = useSelector(getCart);
  const cartTotalSum = useSelector(getCartTotal);

  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    house_number: 0,
    city: '',
  });

  const order = {
    products: cart,
    user: userData,
    totalPrice: cartTotalSum,
  };

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleSubmit = (e) => {
    dispatch(createOrderRequest(order));
  };

  //imie, nazwisko, email, ulica, numer, miasto,
  //button ma wracać do cart

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
                <span>{product.count}</span>
              </Col>
              <Col sm={2}>
                <span>{product.price * product.count}</span>
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
      <Form onSubmit={validate(handleSubmit)}>
        <Form.Group controlId="formFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            {...register('firstName', {
              required: true,
              minLength: 2,
              maxLength: 30,
            })}
            type="text"
            value={userData.firstName}
            name="firstName"
            onChange={updateTextField}
            placeholder="John"
          />
          {errors.firstName && (
            <small className="d-block form-text text-danger mt-2">
              This field is required, minimum 2 signs, max 30 signs
            </small>
          )}
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            {...register('lastName', {
              required: true,
              minLength: 2,
              maxLength: 30,
            })}
            type="text"
            value={userData.lastName}
            name="lastName"
            onChange={updateTextField}
            placeholder="Doe"
          />
          {errors.lastName && (
            <small className="d-block form-text text-danger mt-2">
              This field is required, minimum 2 signs, max 30 signs
            </small>
          )}
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            {...register('email', {
              required: true,
              minLength: 2,
              maxLength: 30,
            })}
            type="email"
            value={userData.email}
            name="email"
            onChange={updateTextField}
            placeholder="johndoe@example.com"
          />
          {errors.email && (
            <small className="d-block form-text text-danger mt-2">
              This field is required, minimum 6 signs, max 30 signs
            </small>
          )}
        </Form.Group>
        <Form.Group controlId="formStreet">
          <Form.Label>Street</Form.Label>
          <Form.Control
            {...register('street', {
              required: true,
              minLength: 5,
              maxLength: 30,
            })}
            type="text"
            value={userData.street}
            name="street"
            onChange={updateTextField}
            placeholder="Pawtucket Ave"
          />
          {errors.street && (
            <small className="d-block form-text text-danger mt-2">
              This field is required, minimum 5 signs, max 30 signs
            </small>
          )}
        </Form.Group>
        <Form.Group controlId="formHouseNumber">
          <Form.Label>House number</Form.Label>
          <Form.Control
            {...register('houseNumber', {
              required: true,
              min: 1,
            })}
            // type="text"
            // inputmode="numeric"
            type="number"
            value={userData.house_number}
            name="house_number"
            onChange={updateNumberField}
            placeholder="2442"
          />
          {errors.houseNumber && (
            <small className="d-block form-text text-danger mt-2">
              This field is required
            </small>
          )}
        </Form.Group>
        <Form.Group controlId="formCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            {...register('city', {
              required: true,
            })}
            type="text"
            value={userData.city}
            name="city"
            onChange={updateTextField}
            placeholder="Pawtucket"
          />
          {errors.city && (
            <small className="d-block form-text text-danger mt-2">
              This field is required
            </small>
          )}
        </Form.Group>
        <Row>
          <Col sm={6}>
            <Button type="submit">Order</Button>
          </Col>
          <Col sm={6}></Col>
        </Row>
        <Link to="/cart">
          <Button>Back to cart</Button>
        </Link>
      </Form>
    </Container>
  );
};

export default Checkout;
