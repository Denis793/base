import React from 'react';
import { Button } from '@/shared/ui/Button';
import styles from './BlogCard.module.scss';

export const BlogCard = ({ img, title, author, date, iconAuthor, iconDate, variant = 'primary' }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={img} alt={title} />
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <Button variant={variant}>Read More</Button>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span>
            <img src={iconAuthor} alt="author" />
            {author}
          </span>
          <span>
            <img src={iconDate} alt="date" />
            {date}
          </span>
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
    </div>
  );
};
