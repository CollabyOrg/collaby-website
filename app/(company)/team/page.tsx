import styles from '../../styles/teamPage.module.css';
import { FC } from 'react';

interface Props {}

const TeamPage: FC<Props> = ({}) => {
  return (
    <>
      <div className={styles.bgImage} />
      <div className={styles.outerContainer}>TeamPage</div>
    </>
  );
};

export default TeamPage;
