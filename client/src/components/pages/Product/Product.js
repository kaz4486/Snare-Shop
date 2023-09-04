import { useDispatch, useSelector } from 'react-redux';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import {
  getProductById,
  getRequest,
  loadProductsRequest,
} from '../../../redux/productsRedux';
import { Alert, Button } from 'reactstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import styles from './Product.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { addToCart } from '../../../redux/cartRedux';
import AmountWidget from '../../features/AmountWidget/AmountWidget';
import Spinner from 'react-bootstrap/Spinner';
import Gallery from '../../features/Gallery/Gallery';

const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => getProductById(state, id));
  const request = useSelector(getRequest);
  const navigate = useNavigate();

  console.log(product);

  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);

  const [productAmount, setProductAmount] = useState('1');

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (product) {
      setTotalPrice(product.price * productAmount);
    }
  }, [product, productAmount]);

  let productPreparedToCart = null;

  if (product) {
    productPreparedToCart = {
      name: product.name,
      price: product.price,
      count: parseInt(productAmount),
      totalPrice: product.price * parseInt(productAmount),
      comment: '',
      id: product.id,
      mainPhoto: product.mainPhoto,
    };
  }

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(productPreparedToCart));
    // setTimeout(() => {
    //   return navigate('/cart');
    // }, 1000);
    navigate('/cart');
  };

  if (request.pending)
    return (
      <Spinner className="mt-3" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  if (request.error) return <Alert color="warning">{request.error}</Alert>;
  if (!request.success)
    return <Alert color="info">Something went wrong...</Alert>;
  if (!product) return <Navigate to="/" />;
  if (request.success)
    return (
      <Container className="mt-4">
        <section className="main-section">
          <Row>
            {' '}
            <Col sm={12} lg={6}>
              <Row>
                <img
                  src={`${process.env.PUBLIC_URL}/images/products/${product.mainPhoto}`}
                  alt="product"
                />
              </Row>
              <Row className="text-center align-items-center">
                <Col
                  sm={12}
                  md={8}
                  className="d-flex justify-content-center align-items-center"
                >
                  <Col sm={6} className="p-2 d-flex justify-content-end">
                    {' '}
                    <div className={styles.price}>$ {totalPrice}</div>
                  </Col>
                  <Col sm={6} className="p-2">
                    <AmountWidget
                      value={productAmount}
                      setProductAmount={setProductAmount}
                    />
                  </Col>
                </Col>
                <Col
                  sm={12}
                  md={4}
                  className="d-flex justify-content-start align-items-center"
                >
                  <div className={styles.cart_div}>
                    <Button
                      className={styles.cart_button}
                      onClick={handleAddToCart}
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
            <Col sm={12} lg={6} className="align-self-center mt-5">
              <Row className="mb-2">
                <h1>{product.name}</h1>
              </Row>
              <Row>
                <article>{product.description}</article>
              </Row>
            </Col>
          </Row>
        </section>
        <section className={styles.gallery}>
          {/* <Row>
            {' '}
            {product.photos.map((photo) => (
              <Col sm={12} md={4} className=" align-self-center" key={photo}>
                <div className={styles.photo_thumbnail}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/products/${photo}`}
                    alt="product"
                  />
                </div>
              </Col>
            ))}
          </Row> */}
          <Row>
            <Gallery photos={product.photos} />
          </Row>
        </section>
      </Container>
    );
};
export default Product;
