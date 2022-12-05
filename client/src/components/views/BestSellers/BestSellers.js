import { Container } from 'react-bootstrap';
import Products from '../../features/Products/Products';
import styles from './BestSellers.module.scss';

const BestSellers = () => {
  return (
    <Container>
      <h2 className={styles.title}>Best sellers</h2>
      <Products />
    </Container>
  );
};

export default BestSellers;
