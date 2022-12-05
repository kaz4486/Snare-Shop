import { Container } from 'react-bootstrap';
import Products from '../../features/Products/Products';
import styles from './BestSellers.module.scss';

const BestSellers = () => {
  return (
    <Container className={styles.container}>
      <h2 className={styles.heading}>Best sellers</h2>
      <Products />
    </Container>
  );
};

export default BestSellers;
