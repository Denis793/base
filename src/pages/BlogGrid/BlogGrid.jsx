import React from 'react';
import styles from './BlogGrid.module.scss';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    image: '/images/blog-01.png',
    author: 'Musharof Chy',
    date: '25 Dec, 2025',
    title: 'Free advertising for your online business',
    slug: '/blog-single',
  },
  {
    id: 2,
    image: '/images/blog-02.png',
    author: 'Musharof Chy',
    date: '25 Dec, 2025',
    title: '9 simple ways to improve your design skills',
    slug: '/blog-single',
  },
  {
    id: 3,
    image: '/images/blog-03.png',
    author: 'Musharof Chy',
    date: '25 Dec, 2025',
    title: 'Tips to quickly improve your coding speed.',
    slug: '/blog-single',
  },
];

export const BlogGrid = () => {
  return (
    <main className={styles.blogGrid}>
      <section className={styles.grid}>
        <div className={styles.posts}>
          {blogPosts.map((post) => (
            <div key={post.id} className={styles.post}>
              <div className={styles.imageWrapper}>
                <img src={post.image} alt={post.title} />
                <div className={styles.overlay}>
                  <Link to={post.slug} className={styles.readMore}>
                    Read More
                  </Link>
                </div>
              </div>
              <div className={styles.meta}>
                <span>👤 {post.author}</span>
                <span>📅 {post.date}</span>
              </div>
              <h4 className={styles.title}>
                <Link to={post.slug}>{post.title}</Link>
              </h4>
            </div>
          ))}
        </div>

        <div className={styles.pagination}>
          <button>&lt;</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>...</button>
          <button>12</button>
          <button>&gt;</button>
        </div>
      </section>

      <section className={styles.cta}>
        <img src="/images/shape-16.svg" alt="shape" className={styles.bg} />
        <div className={styles.ctaContent}>
          <h2>Join with 5000+ Startups Growing with Base.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a
            efficitur leo.
          </p>
          <Link to="/" className={styles.btn}>
            Get Started Now
          </Link>
        </div>
      </section>
    </main>
  );
};
