import { Row, Col, Container } from 'react-bootstrap';
import styles from './ProductBar.module.scss';

const ProductBar = () => {
  return (
    <Container>
      <Row className={styles.bar}>
        <Col sm={6} className={styles.col}>
          <span>Products</span>
        </Col>
        <Col sm={2} className={styles.col}>
          <span>Price</span>
        </Col>
        <Col sm={2} className={styles.col}>
          <span>Amount</span>
        </Col>
        <Col sm={2} className={styles.col}>
          <span>Product price</span>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductBar;
