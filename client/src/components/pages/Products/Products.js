import { useDispatch, useSelector } from 'react-redux';
import {
  getProducts,
  getRequest,
  loadProductsRequest,
} from '../../../redux/productsRedux';
import { Alert } from 'reactstrap';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ProductSummary from '../../common/ProductSummary/ProductSummary';
import arrayChunk from '../../../utils/arrayChunk';
import Spinner from 'react-bootstrap/Spinner';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const request = useSelector(getRequest);

  console.log(products);

  const [selectedFilter, setSelectedFilter] = useState('');
  console.log(selectedFilter);

  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);

  const filteredProducts = selectedFilter
    ? products.filter((product) => product[selectedFilter])
    : products;

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  if (request.pending)
    return (
      <Spinner className="mt-3" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  if (request.error) return <Alert color="warning">{request.error}</Alert>;
  if (!request.success || !products.length)
    return <Alert color="info">Something went wrong...</Alert>;
  if (request.success)
    return (
      <Container className="my-5">
        <select
          id="filter"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <option value="sale">sale</option>
          <option value="">all</option>
          <option value="bestSeller">best seller</option>
        </select>

        {arrayChunk(filteredProducts, filteredProducts.length).map((row, i) => (
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
