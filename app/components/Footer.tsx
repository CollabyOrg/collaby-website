import styles from '../styles/footer.module.css';
import { FC } from 'react';
import Image from 'next/image';
import collabyLogo from '../../public/images/collaby-logo.png';

interface Props {}

const Footer: FC<Props> = ({}) => {
  return (
    <div className={styles.outerContainer}>
      <Image
        style={{ borderRadius: 15 }}
        src={collabyLogo}
        alt=''
        width={200}
        height={200}
        quality={100}
        priority
      />
      <div className={styles.sectionContainer}>
        <span>Collaby headquarters</span>
        <span>Tv 58 # 108 - 61, Bogotá, Colombia</span>
      </div>
      <div className={styles.sectionContainer}>
        <span>
          <b>Phone number:</b> +57 310 635 8522
        </span>
        <span>
          <b>Email:</b> dankramirez@outlook.com
        </span>
      </div>
    </div>
  );
};

export default Footer;
