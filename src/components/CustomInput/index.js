import styles from './index.module.sass';

const CustomInput = ({
  name,
  label,
  type,
  value,
  onChange,
  className,
  placeholder,
}) => {
  return (
    <div className={`${styles.container} ${className ?? ''}`}>
      <label className={styles.label}>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={styles.input}
        placeholder={placeholder ?? ''}
      />
    </div>
  );
};

export default CustomInput;
