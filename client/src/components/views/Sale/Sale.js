import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getProductForSale } from '../../../redux/productsRedux';
import ProductSummary from '../../common/ProductSummary/ProductSummary';
import styles from './Sale.module.scss';
import arrayChunk from '../../../utils/arrayChunk';

const Sale = () => {
  const saleProducts = useSelector(getProductForSale);

  return (
    <Container className={styles.container}>
      <h2 className={styles.heading}>Sales</h2>
      {arrayChunk(saleProducts, saleProducts.length).map((row, i) => (
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

export default Sale;
