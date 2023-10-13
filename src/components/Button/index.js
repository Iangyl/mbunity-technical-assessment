import styles from './index.module.sass';

const Button = ({ label, type, className, onClick, name }) => (
  <button type={type} className={`${styles.button} ${className}`} onClick={onClick} name={name}>
    {label}
  </button>
);

export default Button;
