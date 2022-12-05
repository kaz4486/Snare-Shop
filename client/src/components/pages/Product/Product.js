import { useDispatch, useSelector } from 'react-redux';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import {
  getProductById,
  getRequest,
  loadProductsRequest,
} from '../../../redux/productsRedux';
import { Alert, Button, Progress } from 'reactstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import styles from './Product.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { addToCart, addToCartRequest } from '../../../redux/cartRedux';
import AmountWidget from '../../features/AmountWidget/AmountWidget';

const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => getProductById(state, id));
  const request = useSelector(getRequest);
  const navigate = useNavigate();

  console.log(product.photos);

  const [productAmount, setProductAmount] = useState('1');

  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);

  const productPreparedToCart = {
    name: product.name,
    price: product.price,
    count: parseInt(productAmount),
    totalPrice: product.price * parseInt(productAmount),
    comment: '',
    id: product.id,
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(productPreparedToCart));
    setTimeout(() => {
      return navigate('/cart');
    }, 1000);
  };

  if (request.pending) return <Progress animated color="primary" value={50} />;
  if (request.error) return <Alert color="warning">{request.error}</Alert>;
  if (!request.success)
    return <Alert color="info">Something went wrong...</Alert>;
  if (!product) return <Navigate to="/" />;
  if (request.success)
    return (
      <Container>
        <section className="main-section">
          <Row>
            {' '}
            <Col sm={6}>
              <Row>
                <img
                  src={`${process.env.PUBLIC_URL}/images/products/${product.mainPhoto}`}
                  alt="product"
                />
              </Row>
              <Row className="text-center align-items-center">
                <Col
                  sm={6}
                  className="d-flex justify-content-center align-items-center"
                >
                  <div>{product.price}</div>
                </Col>
                <Col
                  sm={6}
                  className="d-flex justify-content-start align-items-center"
                >
                  <AmountWidget
                    value={productAmount}
                    setProductAmount={setProductAmount}
                  />
                  <div className={styles.cart_div}>
                    <Button
                      className={styles.cart_button}
                      onClick={(e) => handleAddToCart(e)}
                    >
                      <FontAwesomeIcon
                        icon={faCartPlus}
                        className={styles.cart_icon}
                      />
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm={6} className="align-self-center">
              <Row>
                <h1>{product.name}</h1>
              </Row>
              <Row>
                <article>{product.description}</article>
              </Row>
            </Col>
          </Row>
        </section>
        <section className="photo-thumbnails">
          <Row>
            {' '}
            {product.photos.map((photo) => (
              <Col sm={4} className="d-flex align-self-center" key={photo}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/products/${photo}`}
                  alt="product"
                  className={styles.photo_thumbnail}
                />
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    );
};
export default Product;
