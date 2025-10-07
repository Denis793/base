import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/shared/lib/animations';
import { BlogCard } from '@/shared/ui/BlogCard';
import { blogData } from '@/shared/data/blogData';
import authorIcon from '@/assets/images/icons/icon-man.svg';
import dateIcon from '@/assets/images/icons/icon-calender.svg';
import styles from './BlogSection.module.scss';

export const BlogSection = () => {
  return (
    <section className="section " id="blog">
      <div className="container">
        <div className="header">
          <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Latest Blogs & News
          </motion.h2>
          <motion.p
            className="description"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            Stay updated with the latest design and development trends, tips, and industry insights.
          </motion.p>
        </div>

        <motion.div
          className={styles.list}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogData.slice(0, 3).map((b, i) => (
            <motion.div key={b.id} variants={fadeIn} custom={i}>
              <BlogCard
                img={b.img}
                title={b.title}
                author={b.author}
                date={b.date}
                iconAuthor={authorIcon}
                iconDate={dateIcon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
