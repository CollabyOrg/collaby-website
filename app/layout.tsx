import styles from './styles/rootLayout.module.css';
import { FC, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import collabyLogo from '../public/images/collaby-logo.png';

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className={styles.navbarContainer}>
          <Image
            src={collabyLogo}
            alt='The logo image'
            width={100}
            height={100}
            priority
          />
          <Link
            className={styles.link}
            href='/'
          >
            Product
          </Link>
          <Link
            className={styles.link}
            href='/team'
          >
            Team
          </Link>
          <Link
            className={styles.link}
            href='/blog'
          >
            Blog
          </Link>
          <Link
            className={styles.link}
            href='/careers'
          >
            Careers
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
