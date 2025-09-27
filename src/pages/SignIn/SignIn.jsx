import React from 'react';
import styles from './SignIn.module.scss';
import { Link } from 'react-router-dom';

export const SignIn = () => {
  return (
    <main className={styles.signin}>
      <section className={styles.wrapper}>
        <img src="/images/shape-06.svg" alt="shape" className={styles.shape} />
        <img src="/images/shape-03.svg" alt="shape" className={styles.shape} />
        <img src="/images/shape-17.svg" alt="shape" className={styles.shape} />
        <img src="/images/shape-18.svg" alt="shape" className={styles.shape} />

        <div className={styles.card}>
          <h2>Sign in to your Account</h2>
          <p>Lorem ipsum dolor sit amet, consectetur</p>

          <h3>Sign in with Social Media</h3>
          <ul className={styles.social}>
            <li>
              <a href="#">Google</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">GitHub</a>
            </li>
          </ul>

          <span className={styles.divider}>Or, sign in with your email</span>

          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="example@gmail.com" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="**************" />
            </div>

            <button type="submit" className={styles.btnPrimary}>
              Sign In
            </button>

            <p className={styles.signupText}>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};
