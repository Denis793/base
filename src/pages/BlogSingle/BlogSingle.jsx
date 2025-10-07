import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/shared/lib/animations';
import { blogData } from '@/shared/data/blogData';
import blogMain from '@/assets/images/blog/blog-big.png';
import blogImg1 from '@/assets/images/blog/blog-01.png';
import blogImg2 from '@/assets/images/blog/blog-02.png';
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn } from 'react-icons/fa';
import { CtaSection } from '@/widgets/CtaSection';
import styles from './BlogSingle.module.scss';

export const BlogSingle = () => {
  const relatedPosts = blogData.slice(0, 3);

  return (
    <>
      <section className={`section section--bg ${styles.blogSingle}`}>
        <div className="container">
          <motion.div
            className={styles.wrapper}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.article className={styles.article} variants={fadeIn}>
              <img src={blogMain} alt="Main article" className={styles.mainImage} />

              <h2 className={styles.title}>Kobe Steel plant that supplied</h2>

              <div className={styles.meta}>
                <span>
                  <strong>Author:</strong> Devid Cleriya
                </span>
                <span>
                  <strong>Published On:</strong> April 16, 2025
                </span>
                <span>
                  <strong>Category:</strong> Events
                </span>
              </div>

              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a
                efficitur leo. Ut venenatis finibus quam sed condimentum. Curabitur vel turpis in dolor volutpat
                imperdiet in ut mi. Integer non volutpat nulla. Nunc elementum elit viverra, tempus quam non, interdum
                ipsum.
              </p>

              <p className={styles.text}>
                Aenean augue ex, condimentum vel metus vitae, aliquam porta elit. Quisque non metus ac orci mollis
                posuere. Mauris vel ipsum a diam interdum ultricies sed vitae neque. Nulla porttitor quam vitae pulvinar
                placerat. Nulla fringilla elit sit amet justo feugiat sodales. Morbi eleifend, enim non eleifend
                laoreet, odio libero lobortis lectus, non porttitor sem urna sit amet metus. In sollicitudin quam est,
                pellentesque consectetur felis fermentum vitae.
              </p>

              <div className={styles.gallery}>
                <img src={blogImg1} alt="Workspace" />
                <img src={blogImg2} alt="Laptop on desk" />
              </div>

              <h3 className={styles.subtitle}>The powerful force of humanity</h3>

              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed odio lorem. In a efficitur leo. Ut
                venenatis finibus quam sed condimentum. Curabitur vel turpis in dolor volutpat imperdiet in ut mi.
                Integer non volutpat nulla.
              </p>

              <div className={styles.share}>
                <span>Share On:</span>
                <div className={styles.social}>
                  <a href="#">
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    <FaTwitter />
                  </a>
                  <a href="#">
                    <FaPinterestP />
                  </a>
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </motion.article>

            <motion.aside className={styles.sidebar} variants={fadeIn} custom={1}>
              <div className={styles.searchBox}>
                <input type="text" placeholder="Search Here..." />
                <button aria-label="search">🔍</button>
              </div>

              <div className={styles.categories}>
                <h4>Categories</h4>
                <ul>
                  <li>Blog</li>
                  <li>Events</li>
                  <li>Grids</li>
                  <li>News</li>
                  <li>Rounded</li>
                </ul>
              </div>

              <div className={styles.related}>
                <h4>Related Posts</h4>
                <ul>
                  {relatedPosts.map((p) => (
                    <li key={p.id} className={styles.relatedItem}>
                      <img src={p.img} alt={p.title} />
                      <p>{p.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};
