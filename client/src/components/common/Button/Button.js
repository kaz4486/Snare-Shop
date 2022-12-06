import styles from './Button.module.scss';

const Button = ({ children, onClick, type }) => {
  console.log(children);
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
