import { useDispatch, useSelector } from 'react-redux';
import {
  getProducts,
  getRequest,
  loadProductsRequest,
} from '../../../redux/productsRedux';
import { Alert, Progress } from 'reactstrap';
import { useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ProductSummary from '../../common/ProductSummary/ProductSummary';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const request = useSelector(getRequest);

  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);

  if (request.pending) return <Progress animated color="primary" value={50} />;
  if (request.error) return <Alert color="warning">{request.error}</Alert>;
  if (!request.success || !products.length)
    return <Alert color="info">Something went wrong...</Alert>;
  if (request.success)
    return (
      <Container>
        <Row>
          {products.map((product) => (
            <Col
              key={product.id}
              xs={12}
              sm={6}
              lg={4}
              className="justify-content-center mb-2"
            >
              <ProductSummary key={product.id} {...product} />{' '}
            </Col>
          ))}
        </Row>
      </Container>
    );
};

export default Products;
