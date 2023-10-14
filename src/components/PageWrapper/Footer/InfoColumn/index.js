import styles from './index.module.sass';

export const InfoItem = ({ children }) => (
  <li className={styles.infoItem}>
    {children}
  </li>
);

const InfoColumn = ({ title, children }) => (
  <div className={styles.infoColumn}>
    <label className={styles.title}>{title}</label>
    <ul className={styles.itemsList}>{children}</ul>
  </div>
);

export default InfoColumn;
