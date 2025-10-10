import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShapeBackground } from '@/shared/ui/ShapeBackground';
import { Button } from '@/shared/ui/Button';

import styles from './NotFound.module.scss';

export const NotFound = () => {
  const navigate = useNavigate();

  const handleBackToHome = (e) => {
    e.preventDefault();

    navigate('/');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className={styles.notFoundWrapper}>
        <ShapeBackground />

        <div className="container">
          <section className={styles.notFound}>
            <h1 className={styles.errorCode}>404</h1>
            <h2 className={styles.title}>Sorry, the page can’t be found</h2>
            <p className="description">
              The page you were looking for appears to have been moved, deleted or does not exist.
            </p>

            <Button variant="primary" onClick={handleBackToHome} aria-label="Go to home">
              Back to Home
            </Button>
          </section>
        </div>
      </div>
    </>
  );
};
