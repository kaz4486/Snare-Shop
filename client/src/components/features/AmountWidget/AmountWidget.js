import styles from './AmountWidget.module.scss';

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
      <button onClick={handleDecreaseValue}>-</button>

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

      <button onClick={handleIncreaseValue}>+</button>
    </div>
  );
};

export default AmountWidget;
