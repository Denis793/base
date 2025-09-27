import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from './ClientLogoSection.module.scss';

const logos = [
  '@/images/brands/brand-light-01.svg',
  '@/images/brands/brand-light-02.svg',
  '@/images/brands/brand-light-03.svg',
  '@/images/brands/brand-light-04.svg',
  '@/images/brands/brand-light-05.svg',
  '@/images/brands/brand-light-06.svg',
];

export const ClientLogoSection = () => {
  return (
    <section className={styles.clientSection}>
      <h2 className={styles.heading}>Trusted by 5000+ Clients</h2>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={40}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 5, spaceBetween: 40 },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <img src={logo} alt={`Client ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
