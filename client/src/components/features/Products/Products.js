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
import arrayChunk from '../../../utils/arrayChunk';

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
        {/* {products.map((product) => (
          <Col
            key={product.id}
            xs={12}
            sm={6}
            lg={4}
            className="justify-content-center mb-2 mx-1"
          >
            <ProductSummary key={product.id} {...product} />{' '}
          </Col>
        ))} */}

        {arrayChunk(products, products.length).map((row, i) => (
          <div key={i} className="row mx-auto">
            {row.map((col, i) => (
              <div
                className="col-sm-12 col-md-6 col-xl-4 mb-2 d-flex justify-content-center"
                key={col.id}
              >
                <ProductSummary key={i} {...col} />
              </div>
            ))}
          </div>
        ))}
      </Container>
    );
};

export default Products;
