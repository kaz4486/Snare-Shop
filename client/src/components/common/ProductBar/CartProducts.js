import { Row, Col, Container } from 'react-bootstrap';
import styles from './CartProducts.module.scss';
import { useSelector } from 'react-redux';
import { getCart } from '../../../redux/cartRedux';
import CartBox from '../../features/CartBox/CartBox';

const CartProducts = ({ removeButton }) => {
  const cart = useSelector(getCart);

  return (
    <table className={styles.table}>
      <thead className={styles.table_head}>
        <tr>
          <th className={styles.table_th_center}>Product</th>
          <th className={styles.table_th_center}>Price</th>
          <th className={styles.table_th_center}>Amount</th>
          <th className={styles.table_th_center}>Comment</th>
          <th className={styles.table_th_center}>Product price</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product) => (
          <CartBox
            product={product}
            key={product.id}
            removeButton={removeButton}
            // setProductOrder={setProductOrder}
          />
        ))}
      </tbody>
    </table>
    // <Container>
    //   <Row className={styles.bar}>
    //     <Col xs={6} sm={6} className={styles.col}>
    //       <span>Products</span>
    //     </Col>
    //     <Col xs={2} sm={2} className={styles.col}>
    //       <span>Price</span>
    //     </Col>
    //     <Col xs={2} sm={2} className={styles.col}>
    //       <span>Amount</span>
    //     </Col>
    //     <Col xs={2} sm={2} className={styles.col}>
    //       <span>Product price</span>
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default CartProducts;
