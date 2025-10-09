import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { statsData } from '@/shared/data/statsData';
import styles from './StatsSection.module.scss';

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!isInView || started) return;
    setStarted(true);

    const duration = 1500;
    const easing = (t) => 1 - Math.pow(1 - t, 3);

    statsData.forEach((stat, index) => {
      const startTime = performance.now();

      const animate = (time) => {
        const progress = Math.min((time - startTime) / duration, 1);
        const eased = easing(progress);
        const value = Math.floor(stat.value * eased);

        setCounts((prev) => {
          const next = [...prev];
          next[index] = value;
          return next;
        });

        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    });
  }, [isInView, started]);

  return (
    <section ref={ref} className={`section section--bg ${styles.statsSection}`}>
      <div className="container">
        <div className={styles.statsWrapper}>
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              className={styles.item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className={styles.value}>{counts[i]}</h3>
              <p className={styles.label}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
