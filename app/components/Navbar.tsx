import styles from '../styles/navbar.module.css';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import collabyLogo from '../../public/images/collaby-logo.png';

interface Props {}

const Navbar: FC<Props> = ({}) => {
  return (
    <div className={styles.outerContainer}>
      <span>Collaby</span>
      <Link
        className={styles.firstItemContainer}
        href='/'
      >
        Product
      </Link>
      <Link
        className={styles.secondItemContainer}
        href='/team'
      >
        Team
      </Link>
      <Link
        className={styles.thirdItemContainer}
        href='/blog'
      >
        Blog
      </Link>
      <Link
        className={styles.fourthItemContainer}
        href='/careers'
      >
        Careers
      </Link>
    </div>
  );
};

export default Navbar;
