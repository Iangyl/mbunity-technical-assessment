import { DiscordIcon, InstagramIcon, TwitterIcon, circleIcon, slicedCircleIcon } from '../../../assets';
import { contactList } from './index.config';

import styles from './index.module.sass';

const CtactInfo = () => (
  <address className={styles.contactInfo}>
    <h2 className={styles.title}>contact information</h2>
    <p className={styles.subtitle}>Say something to start a live chat!</p>
    <ul className={`list-type-reset ${styles.infoContainer}`}>
      {contactList.map((item, idx) => (
        <li key={idx}>
          <img src={item.icon} alt="" />
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
    <div className={styles.socialLinks}>
      <a href='https://twitter.com/AirdropAchiever' target='_blank' rel='noreferrer'>
        <TwitterIcon />
      </a>
      <a href='https://www.instagram.com/enleomusic/' target='_blank' rel='noreferrer'>
        <InstagramIcon />
      </a>
      <a href='https://discord.com/servers' target='_blank' rel='noreferrer'>
        <DiscordIcon />
      </a>
    </div>
    <img className={styles.circleBig} src={slicedCircleIcon} alt=''/>
    <img className={styles.circleSmall} src={circleIcon} alt=''/>
  </address>
);

export default CtactInfo;
