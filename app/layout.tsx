import './styles/global.css';
import styles from './styles/rootLayout.module.css';
import { FC, ReactNode } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={styles.outerContainer}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
