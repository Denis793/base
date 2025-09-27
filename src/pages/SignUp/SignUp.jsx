import React from 'react';
import styles from './SignUp.module.scss';
import { Link } from 'react-router-dom';

export const SignUp = () => {
  return (
    <main className={styles.signup}>
      <section className={styles.wrapper}>
        <img src="/images/shape-06.svg" alt="shape" className={styles.shape} />
        <img src="/images/shape-03.svg" alt="shape" className={styles.shape} />
        <img src="/images/shape-17.svg" alt="shape" className={styles.shape} />
        <img src="/images/shape-18.svg" alt="shape" className={styles.shape} />

        <div className={styles.card}>
          <h2>Create an Account</h2>
          <p>Lorem ipsum dolor sit amet, consectetur</p>

          <h3>Sign up with Social Media</h3>
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

          <span className={styles.divider}>Or, sign up with your email</span>

          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="fullname">Full name</label>
              <input type="text" id="fullname" placeholder="Devid Wonder" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="example@gmail.com" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="**************" />
            </div>

            <button type="submit" className={styles.btnPrimary}>
              Sign Up
            </button>

            <p className={styles.signinText}>
              Already have an account? <Link to="/signin">Sign In</Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};
