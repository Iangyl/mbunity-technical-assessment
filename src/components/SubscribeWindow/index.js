import { useCallback, useState } from 'react';
import SubscribeInput from './SubscribeInput';

import styles from './index.module.sass';

const SubscribeWindow = () => {
  const [email, setEmail] = useState('');

  const handleChange = useCallback((event) => {
    setEmail(event.target.value);
  }, []);

  const handleClick = useCallback(() => {
    console.log(`[Notify] Subscribed: ${email}`);
  }, [email]);

  return (
    <div className={styles.subscribeWindow}>
      <h5 className={styles.title}>Join Our Newsletter</h5>
      <SubscribeInput
        value={email}
        onChange={handleChange}
        onClick={handleClick}
      />
      <p className={styles.tip}>* Will send you weekly updates for your better tool management.</p>
    </div>
  );
};

export default SubscribeWindow;
