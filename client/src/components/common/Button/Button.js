import styles from './Button.module.scss';

const Button = ({ children }) => {
  console.log(children);
  return <button className={styles.button}>{children}</button>;
};

export default Button;
