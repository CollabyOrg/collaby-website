import styles from './styles/productPage.module.css';
import { FC } from 'react';

interface Props {}

const ProductPage: FC<Props> = ({}) => {
  return (
    <>
      <div className={styles.bgImage} />
      <div className={styles.outerContainer}>ProductPage</div>
    </>
  );
};

export default ProductPage;
