import clsx from 'clsx';
import styles from './Button.module.scss';

const Button = ({ children, onClick, type, remove }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(styles.button, remove ? styles.remove : '')}
    >
      {children}
    </button>
  );
};

export default Button;
