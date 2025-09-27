import React from 'react';
import styles from './BlogSingle.module.scss';

export const BlogSingle = () => {
  return (
    <main className={styles.blogSingle}>
      <section className={styles.post}>
        <img src="/images/blog-big.png" alt="Blog" className={styles.cover} />

        <h2>Kobe Steel plant that supplied</h2>

        <ul className={styles.meta}>
          <li>
            <strong>Author:</strong> Devid Cleriya
          </li>
          <li>
            <strong>Published On:</strong> April 16, 2025
          </li>
          <li>
            <strong>Category:</strong> Events
          </li>
        </ul>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a
          efficitur leo. Ut venenatis rhoncus quam sed condimentum. Curabitur vel turpis in dolor volutpat imperdiet in
          ut mi.
        </p>

        <p>
          Aenean augue ex, condimentum vel metus vitae, aliquam porta elit. Quisque non metus ac orci mollis posuere.
          Mauris vel ipsum a diam interdum ultricies sed vitae neque. Nulla porttitor quam vitae pulvinar placerat.
        </p>

        <div className={styles.gallery}>
          <img src="/images/blog-04.png" alt="Blog" />
          <img src="/images/blog-05.png" alt="Blog" />
        </div>

        <h2>The powerful force of humanity</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a
          efficitur leo. Ut venenatis rhoncus quam sed condimentum. Curabitur vel turpis in dolor volutpat imperdiet.
        </p>

        <div className={styles.share}>
          <span>Share On:</span>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
      </section>

      <aside className={styles.sidebar}>
        <div className={styles.widget}>
          <input type="text" placeholder="Search Here..." />
        </div>

        <div className={styles.widget}>
          <h4>Categories</h4>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Grids</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Rounded</a>
            </li>
          </ul>
        </div>

        <div className={styles.widget}>
          <h4>Related Posts</h4>
          <ul>
            <li>
              <img src="/images/blog-small-01.png" alt="Blog" />
              <a href="#">Free advertising for your online business</a>
            </li>
            <li>
              <img src="/images/blog-small-02.png" alt="Blog" />
              <a href="#">9 simple ways to improve your design skills</a>
            </li>
            <li>
              <img src="/images/blog-small-03.png" alt="Blog" />
              <a href="#">Tips to quickly improve your coding speed</a>
            </li>
          </ul>
        </div>
      </aside>

      <section className={styles.cta}>
        <img src="/images/shape-16.svg" alt="Bg Shape" className={styles.bg} />
        <div className={styles.ctaContent}>
          <h2>Join with 5000+ Startups Growing with Base.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem.</p>
          <a href="#" className={styles.btn}>
            Get Started Now
          </a>
        </div>
      </section>
    </main>
  );
};
