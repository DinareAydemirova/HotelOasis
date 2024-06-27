import React from 'react';
import styles from './SkeletonLoader.module.scss';

const SkeletonLoader = () => {
  return (
    <div className={styles.skeletonContainer}>
      {Array.from({ length: 4}).map((_, index) => (
        <div key={index} className={styles.skeleton}>
          <div className={`${styles.skeleton} ${styles.skeletonImage}`} />
          <div className={`${styles.skeleton} ${styles.skeletonText}`} />
          <div className={`${styles.skeleton} ${styles.skeletonDescription}`} />
          <div className={`${styles.skeleton} ${styles.skeletonText}`} />
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
