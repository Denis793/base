import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { fadeIn } from '@/shared/lib/animations';
import { Button } from '@/shared/ui/Button';
import { testimonials } from '@/shared/data/testimonialsData';

import arrowLeft from '@/assets/images/icons/icon-arrow-left.svg';
import arrowRight from '@/assets/images/icons/icon-arrow-right.svg';
import quoteIcon from '@/assets/images/testimonials/icon-quote.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from './TestimonialsSection.module.scss';

export const TestimonialsSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <motion.div
          className="header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2>Client’s Testimonials</h2>
          <p className="description">
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using.
          </p>
        </motion.div>

        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiperRef.current = swiper.el;
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={t.id}>
              <motion.div
                className={styles.testimonialCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                custom={i}
              >
                <div className={styles.imageWrapper}>
                  <img src={t.image} alt={t.name} />
                </div>
                <div className={styles.content}>
                  <img src={quoteIcon} alt="Quote" className={styles.quoteIcon} />
                  <p className="description">{t.text}</p>
                  <h4>{t.name}</h4>
                  <span className={styles.role}>{t.role}</span>
                  <div className={styles.company}>{t.company}</div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.navigation}>
          <Button ref={prevRef} variant="primary" round icon={arrowLeft} direction="left" />
          <Button ref={nextRef} variant="primary" round icon={arrowRight} direction="right" />
        </div>
      </div>
    </section>
  );
};
