import React from 'react';
import shape1 from '@/assets/images/shape/shape-03.svg';
import shape2 from '@/assets/images/shape/shape-06.svg';
import shape3 from '@/assets/images/shape/shape-07.svg';
import shape4 from '@/assets/images/shape/shape-12.svg';
import shape5 from '@/assets/images/shape/shape-13.svg';
import styles from './ShapeBackground.module.scss';

export const ShapeBackground = () => {
  const shapes = [shape1, shape2, shape3, shape4, shape5];

  return (
    <div className={styles.shapeWrapper}>
      {shapes.map((src, i) => (
        <img key={i} className={styles[`shape${i + 1}`]} src={src} alt={`shape-${i + 1}`} />
      ))}
    </div>
  );
};
