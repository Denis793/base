import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';
import styles from './BlogCard.module.scss';

export const BlogCard = ({
  img,
  title,
  author,
  date,
  iconAuthor,
  iconDate,
  variant = 'primary',
  to = '/blog-single',
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <div className={styles.card} onClick={handleClick} role="button" tabIndex={0}>
      <div className={styles.cardImage}>
        <img src={img} alt={title} />
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <Button
              variant={variant}
              onClick={(e) => {
                e.stopPropagation();
                handleClick();
              }}
            >
              Read More
            </Button>
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
