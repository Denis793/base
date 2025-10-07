import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance } from 'react-icons/fa';
import styles from './Social.module.scss';

export const Social = () => {
  return (
    <>
      <div className={styles.socials}>
        <FaFacebookF />
        <FaTwitter />
        <FaLinkedinIn />
        <FaBehance />
      </div>
    </>
  );
};
