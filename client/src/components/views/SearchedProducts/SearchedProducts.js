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
import Spinner from 'react-bootstrap/Spinner';
import arrayChunk from '../../../utils/arrayChunk';

const SearchedProducts = () => {
  const { searchPhrase } = useParams();
  const dispatch = useDispatch();

  const products = useSelector(getProducts);
  const request = useSelector(getRequest);

  useEffect(() => {
    dispatch(loadSearchedProductsRequest(searchPhrase));
  }, [dispatch, searchPhrase]);

  if (request.pending)
    return (
      <Spinner className="mt-3" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
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
          {arrayChunk(products, products.length).map((row, i) => (
            <div key={i} className="row mx-auto">
              {row.map((col, i) => (
                <Col
                  key={col.id}
                  sm={12}
                  md={6}
                  xl={4}
                  className="justify-content-center"
                >
                  <ProductSummary key={i} {...col} />
                </Col>
              ))}
            </div>
          ))}
        </section>

        {/* {arrayChunk(products, products.length).map((row, i) => (
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
        ))} */}
      </Container>
    );
};

export default SearchedProducts;
