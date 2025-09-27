import React from 'react';
import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <main className={styles.notFound}>
      <section className={styles.wrapper}>
        <img src="/images/shape-06.svg" alt="shape" className={styles.shape} />
        <img src="/images/shape-03.svg" alt="shape" className={styles.shape} />
        <img src="/images/shape-17.svg" alt="shape" className={styles.shape} />
        <img src="/images/shape-18.svg" alt="shape" className={styles.shape} />

        <div className={styles.content}>
          <img src="/images/404.svg" alt="404" className={styles.image} />

          <h2>Sorry, the page can’t be found</h2>
          <p>The page you were looking for appears to have been moved, deleted or does not exist.</p>

          <Link to="/" className={styles.btn}>
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
};
