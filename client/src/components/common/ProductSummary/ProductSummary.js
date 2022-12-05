import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './ProductSummary.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';

const ProductSummary = ({ id, name, mainPhoto, price }) => {
  return (
    <div key={id} className={clsx(styles.product, 'align-items-center')}>
      <img
        className={styles.photo}
        variant="top"
        src={`${process.env.PUBLIC_URL}/images/products/${mainPhoto}`}
        alt="Product"
      />
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.price}>$ {price}</p>
      <Link to={'/products/' + id}>
        <Button>View details</Button>
        {/* <Button className="mb-2">View details</Button> */}
      </Link>
    </div>
  );
};

export default ProductSummary;
