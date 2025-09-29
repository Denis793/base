import React from 'react';
import icon01 from '@/assets/images/icons/icon-01.svg';
import icon02 from '@/assets/images/icons/icon-02.svg';
import icon03 from '@/assets/images/icons/icon-03.svg';
import styles from './Features.module.scss';

export const Features = () => {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.featureItem}>
        <div className={`${styles.imageWrapper} ${styles.image1}`}>
          <img className={styles.featureSVG} src={icon01} alt="24/7 Support" />
        </div>

        <div className={styles.descriptionWrapper}>
          <h4>24/7 Support</h4>
          <p className="description">Lorem ipsum dolor sit amet conse adipiscing elit.</p>
        </div>
      </div>

      <div className={styles.featureItem}>
        <div className={`${styles.imageWrapper} ${styles.image2}`}>
          <img className={styles.featureSVG} src={icon02} alt="Take Ownership" />
        </div>

        <div className={styles.descriptionWrapper}>
          <h4>Take Ownership</h4>
          <p className="description">Lorem ipsum dolor sit amet conse adipiscing elit.</p>
        </div>
      </div>

      <div className={styles.featureItem}>
        <div className={`${styles.imageWrapper} ${styles.image3}`}>
          <img className={styles.featureSVG} src={icon03} alt="Team Work" />
        </div>

        <div className={styles.descriptionWrapper}>
          <h4>Team Work</h4>
          <p className="description">Lorem ipsum dolor sit amet conse adipiscing elit.</p>
        </div>
      </div>
    </section>
  );
};
