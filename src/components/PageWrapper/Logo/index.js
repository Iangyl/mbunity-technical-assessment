import { useMemo } from 'react';
import { logoDarkIcon, logoLightIcon } from '../../../assets/icons';

import styles from './index.module.sass';

const Logo = ({ isOpened }) => {
  /* can be changed in future */
  const [logoIcon, status] = useMemo(() => {
    if (isOpened) return [logoLightIcon, 'opened'];
    else return [logoDarkIcon, 'closed'];
  }, [isOpened]);

  return (
    <figure className={`${styles.logo} ${styles[status]}`}>
      <img src={logoIcon} alt="" />
      <figcaption>Mbuntity Technologies</figcaption>
    </figure>
  );
};

export default Logo;
