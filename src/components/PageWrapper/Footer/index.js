import Logo from '../Logo';
import InfoColumn, { InfoItem } from './InfoColumn';
import SubscribeWindow from '../../SubscribeWindow';

import { contactList, companyList, legalList, quickLinks } from './index.config';

import styles from './index.module.sass';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.logoContainer}>
      <Logo isOpened={true} />
    </div>
    <div className={styles.lineContainer}>
      <hr className={styles.line} />
    </div>
    <div className={styles.linksContainer}>
      <InfoColumn title="Reach us">
        {contactList.map((item, idx) => (
          <InfoItem key={idx}>
            <img src={item.icon} alt="" />
            <span>{item.text}</span>
          </InfoItem>
        ))}
      </InfoColumn>
      <InfoColumn title="Company">
        {companyList.map((item, idx) => (
          <InfoItem key={idx}>
            <a href={item.link}>{item.name}</a>
          </InfoItem>
        ))}
      </InfoColumn>
      <InfoColumn title="Legal">
        {legalList.map((item, idx) => (
          <InfoItem key={idx}>
            <a href={item.link}>{item.name}</a>
          </InfoItem>
        ))}
      </InfoColumn>
      <InfoColumn title="Quick Links">
        {quickLinks.map((item, idx) => (
          <InfoItem key={idx}>
            <a href={item.link}>{item.name}</a>
          </InfoItem>
        ))}
      </InfoColumn>
      <SubscribeWindow />
    </div>
  </footer>
);

export default Footer;
