import styles from '../styles/blogPage.module.css';
import { FC } from 'react';

interface Props {}

const BlogPage: FC<Props> = ({}) => {
  return (
    <>
      <div className={styles.bgImage} />
      <div className={styles.outerContainer}>BlogPage</div>
    </>
  );
};

export default BlogPage;
