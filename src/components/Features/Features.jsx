import React from 'react';
import icon01 from '@/images/icons/icon-01.svg';
import icon02 from '@/images/icons/icon-02.svg';
import icon03 from '@/images/icons/icon-03.svg';
import styles from './Features.module.scss';

export const Features = () => {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.featureItem}>
        <img src={icon01} alt="24/7 Support" />
        <h4>24/7 Support</h4>
        <p>Lorem ipsum dolor sit amet conse adipiscing elit.</p>
      </div>
      <div className={styles.featureItem}>
        <img src={icon02} alt="Take Ownership" />
        <h4>Take Ownership</h4>
        <p>Lorem ipsum dolor sit amet conse adipiscing elit.</p>
      </div>
      <div className={styles.featureItem}>
        <img src={icon03} alt="Team Work" />
        <h4>Team Work</h4>
        <p>Lorem ipsum dolor sit amet conse adipiscing elit.</p>
      </div>
    </section>
  );
};
