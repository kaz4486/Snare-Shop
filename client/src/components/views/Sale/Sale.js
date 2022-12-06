import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getProductForSale } from '../../../redux/productsRedux';
import ProductSummary from '../../common/ProductSummary/ProductSummary';
import styles from './Sale.module.scss';

const Sale = () => {
  const saleProducts = useSelector(getProductForSale);

  return (
    <Container className={styles.container}>
      <h2 className={styles.heading}>Sales</h2>
      {saleProducts.map((product) => (
        <ProductSummary key={product.id} {...product} />
      ))}
    </Container>
  );
};

export default Sale;
