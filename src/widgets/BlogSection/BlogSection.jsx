import { motion } from 'framer-motion';
import { Button } from '@/shared/ui/Button';
import { fadeIn, staggerContainer } from '@/shared/lib/animations';
import authorIcon from '@/assets/images/icons/icon-man.svg';
import dateIcon from '@/assets/images/icons/icon-calender.svg';
import blog1 from '@/assets/images/blog/blog-01.png';
import blog2 from '@/assets/images/blog/blog-02.png';
import blog3 from '@/assets/images/blog/blog-03.png';
import styles from './BlogSection.module.scss';

const blogs = [
  {
    id: 1,
    img: blog1,
    title: 'Free advertising for your online business',
    author: 'Musharof Chy',
    date: '25 Dec, 2025',
  },
  {
    id: 2,
    img: blog2,
    title: '9 simple ways to improve your design skills',
    author: 'Musharof Chy',
    date: '25 Dec, 2025',
  },
  {
    id: 3,
    img: blog3,
    title: 'Tips to quickly improve your coding speed.',
    author: 'Musharof Chy',
    date: '25 Dec, 2025',
  },
];

export const BlogSection = () => {
  return (
    <>
      <section className="section section--bg" id="blog">
        <div className="container">
          <div className="header">
            <motion.h2
              className={styles.title}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
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
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using.
            </motion.p>
          </div>

          <motion.div
            className={styles.list}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {blogs.map((b, i) => (
              <motion.div key={b.id} className="card" variants={fadeIn} custom={i}>
                <div className="cardImage">
                  <img src={b.img} alt={b.title} />
                  <div className="overlay">
                    <div className="overlayContent">
                      <Button variant="primary">Read More</Button>
                    </div>
                  </div>
                </div>

                <div className="content">
                  <div className="meta">
                    <span>
                      <img src={authorIcon} alt="author" />
                      {b.author}
                    </span>
                    <span>
                      <img src={dateIcon} alt="date" />
                      {b.date}
                    </span>
                  </div>
                  <h3 className="cardTitle">{b.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};
