// LoadingSpinner.js
import React from 'react';
import styles from './loader.module.css';

const Loader = () => {
  return (
    <div className={styles.spinner}>
       <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
