import RadioSelect from '../../../RadioSelect';

import styles from './index.module.sass';

const RadioBlock = () => (
  <div className={styles.radioBlock}>
    <p>select subject?</p>
    <RadioSelect />
  </div>
);

export default RadioBlock;
