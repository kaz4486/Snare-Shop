import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './ProductSummary.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';

const ProductSummary = ({ id, name, mainPhoto, price, sale }) => {
  return (
    <div key={id} className={clsx(styles.product, ' mx-0 mb-3')}>
      <img
        className={styles.photo}
        variant="top"
        src={`${process.env.PUBLIC_URL}/images/products/${mainPhoto}`}
        alt="Product"
      />
      {sale && (
        <div className={styles.sale}>
          <p>Sale</p>
        </div>
      )}
      <h3 className={styles.title}>{name}</h3>
      {sale && (
        <p className={styles.price}>
          <strike className={styles.price}>$ {price}</strike> ${' '}
          {(0.8 * price).toFixed(2)}
        </p>
      )}
      {!sale && <p className={styles.price}>$ {price}</p>}

      <Link to={'/products/' + id}>
        <Button>View details</Button>
        {/* <Button className="mb-2">View details</Button> */}
      </Link>
    </div>
  );
};

export default ProductSummary;
