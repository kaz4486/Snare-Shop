import styles from './AmountWidget.module.scss';
import { Col, Row } from 'react-bootstrap';
import clsx from 'clsx';

const AmountWidget = ({ value, setProductAmount, handleAmountChange }) => {
  const handleDecreaseValue = () => {
    if (setProductAmount && value > 0) {
      setProductAmount(parseInt(value) - 1);
    }
    if (!setProductAmount && value > 0) {
      handleAmountChange(parseInt(value) - 1);
    }
  };

  const handleIncreaseValue = () => {
    if (setProductAmount && value < 10) {
      setProductAmount(parseInt(value) + 1);
    }
    if (!setProductAmount && value < 10) {
      handleAmountChange(parseInt(value) + 1);
    }
  };

  return (
    <div className={styles.widget}>
      <Row className="p-0  d-flex justify-content-center">
        <Col xs={12} lg={4} className={clsx(styles.col_minus)}>
          <button onClick={handleDecreaseValue}>-</button>
        </Col>
        <Col xs={12} lg={4} className={clsx(styles.col_input)}>
          <input
            type="number"
            min="0"
            max="10"
            value={value}
            readOnly

            //
            // onKeyPress={(event) => {
            //   if (!/[0-9]/.test(event.key)) {
            //     event.preventDefault();
            //   }
            // }
            // }
          />
        </Col>
        <Col xs={12} lg={4} className={clsx(styles.col_plus)}>
          <button onClick={handleIncreaseValue}>+</button>
        </Col>
      </Row>
    </div>
  );
};

export default AmountWidget;
