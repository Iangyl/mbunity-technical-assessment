import styles from './index.module.sass';

const SubscribeInput = ({ value, name, onChange, onClick }) => (
  <div className={styles.subscribeInput}>
    <input
      type="email"
      value={value}
      name={name}
      onChange={onChange}
      className={styles.input}
      placeholder='Your email address'
    />
    <button type="button" onClick={onClick} className={styles.button}>
      Subscribe
    </button>
  </div>
);

export default SubscribeInput;
