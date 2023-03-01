import { FC, ReactNode } from 'react';
import Navbar from './components/Navbar';

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
