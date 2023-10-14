import { useMemo } from 'react';
import { LogoIcon } from '../../../assets';

import styles from './index.module.sass';

const Logo = ({ isOpened }) => {
  const mode = useMemo(() => {
    if (isOpened) return 'light';
    else return 'dark';
  }, [isOpened]);

  return (
    <figure className={`${styles.logo} ${styles[mode]}`}>
      <LogoIcon width={48} height={50} mode={mode} />
      <figcaption>Mbuntity Technologies</figcaption>
    </figure>
  );
};

export default Logo;
