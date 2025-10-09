import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ThemeImage } from '@/shared/ui/ThemeImage';
import 'swiper/css';
import styles from './PartnersSection.module.scss';

export const PartnersSection = () => {
  const partners = [1, 2, 3, 4, 5, 6];

  return (
    <section className={`section section--bg ${styles.partnersSection}`}>
      <div className="container">
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
          className={styles.slider}
        >
          {partners.map((i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <ThemeImage
                name={`partner${i}`}
                alt={`Partner ${i}`}
                fit="contain"
                position="center"
                className={styles.partnerLogo}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
