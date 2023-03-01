import styles from '../../styles/careersPage.module.css';
import { FC } from 'react';

interface Props {}

const CareersPage: FC<Props> = ({}) => {
  return (
    <>
      <div className={styles.bgImage} />
      <div className={styles.outerContainer}>CareersPage</div>
    </>
  );
};

export default CareersPage;
