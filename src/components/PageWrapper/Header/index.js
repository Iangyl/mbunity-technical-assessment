import { useState, useMemo } from 'react';
import useScreenSize from '../../../hooks/useScreenSize';

import { links } from './index.config';

import Logo from '../Logo';

import {
  UserIcon,
  CartIcon
} from '../../../assets';

import styles from './index.module.sass';
import BurgerButton from '../BurgerButton';

const Header = () => {
  const {width} = useScreenSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatDevice = useMemo(() => {
    if (width >= 1024) return 'computer'
    else if (width < 1024 && width > 425) return 'tablet'
    else if (width <= 425) return 'mobile'
    else return ''
  }, [width])

  const burgerMenuStatus = useMemo(() => isMenuOpen ? 'opened' : 'closed', [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${styles[whatDevice]} ${styles[burgerMenuStatus]}`}>
      <div className={`wrapper ${styles.navContainer}`}>
        <div>
          <Logo isOpened={isMenuOpen} />
          <BurgerButton checked={isMenuOpen} onClick={toggleMenu} />
        </div>
        <nav>
          <ul
            className={`${styles.navbar} ${
              isMenuOpen ? styles.openMenu : ''
            }`}
          >
            {links.map((item, idx) => (
              <li key={idx} className={styles.navbarItem}>
                <a className={styles.navbarItemLink} href={item.link}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <button type="button" className={styles.btn}>
              <UserIcon width={16} height={16} mode={isMenuOpen ? 'light' : 'dark'} />
            </button>
            <button type="button" className={styles.btn}>
              <CartIcon width={16} height={16} mode={isMenuOpen ? 'light' : 'dark'} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
