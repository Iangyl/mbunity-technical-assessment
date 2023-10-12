import { useState } from 'react';
import { links } from './index.config';
import Logo from '../Logo';

import {
  userDarkIcon,
  userLightIcon,
  cartDarkIcon,
  cartLightIcon,
  burgerIcon,
  crossIcon
} from '../../../assets/icons';

import styles from './index.module.sass';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={`wrapper ${styles.navContainer}`}>
        <div>
          <Logo />
          <button className={styles.burgerBtn}>
            <img src={isMenuOpen ? crossIcon : burgerIcon} alt=''/>
          </button>
        </div>
        <nav>
          <ul
            className={`list-type-reset ${styles.navbar} ${
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
              <img src={isMenuOpen ? userLightIcon : userDarkIcon} alt="" />
            </button>
            <button type="button" className={styles.btn}>
              <img src={isMenuOpen ? cartLightIcon : cartDarkIcon} alt="" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
