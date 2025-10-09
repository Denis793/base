import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/shared/lib/animations';
import { BlogCard } from '@/shared/ui/BlogCard';
import { blogData } from '@/shared/data/blogData';
import authorIcon from '@/assets/images/icons/icon-man.svg';
import dateIcon from '@/assets/images/icons/icon-calender.svg';
import styles from './BlogGrid.module.scss';

export const BlogGrid = () => (
  <main className={styles.blogGrid}>
    <motion.div
      className={styles.grid}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}>
      {blogData.map((p, i) => (
        <motion.div key={p.id} variants={fadeIn} custom={i}>
          <BlogCard
            img={p.img}
            title={p.title}
            author={p.author}
            date={p.date}
            iconAuthor={authorIcon}
            iconDate={dateIcon}
          />
        </motion.div>
      ))}
    </motion.div>
  </main>
);
