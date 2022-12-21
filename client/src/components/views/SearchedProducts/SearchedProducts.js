import { useEffect } from 'react';
import { Container, Alert, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getProducts,
  getRequest,
  loadSearchedProductsRequest,
} from '../../../redux/productsRedux';
import { Progress } from 'reactstrap';
import ProductSummary from '../../common/ProductSummary/ProductSummary';
import styles from '../SearchedProducts/SearchedProducts.module.scss';

const SearchedProducts = () => {
  const { searchPhrase } = useParams();
  const dispatch = useDispatch();

  const products = useSelector(getProducts);
  const request = useSelector(getRequest);

  useEffect(() => {
    dispatch(loadSearchedProductsRequest(searchPhrase));
  }, [dispatch, searchPhrase]);

  if (request.pending)
    return <Progress animated color="primary" value={50} className="mt-3" />;
  if (request.error)
    return (
      <Alert color="warning" className="mt-3">
        {request.error}
      </Alert>
    );
  if (!request.success)
    return (
      <Alert color="info" className="mt-3">
        No results match your search criteria
      </Alert>
    );
  if (request.success)
    return (
      <Container className={styles.container}>
        <h2 className={styles.heading}>Searched products</h2>
        <section>
          {products.map((product) => (
            <Col
              key={product.id}
              xs={12}
              sm={6}
              lg={4}
              className="justify-content-center"
            >
              <ProductSummary key={product.id} {...product} />
            </Col>
          ))}
        </section>
      </Container>
    );
};

export default SearchedProducts;
