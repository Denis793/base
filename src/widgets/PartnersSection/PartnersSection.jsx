import React, { useEffect, useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import styles from './PartnersSection.module.scss';

// Light
import logoLight1 from '@/assets/images/brands/brand-light-01.svg';
import logoLight2 from '@/assets/images/brands/brand-light-02.svg';
import logoLight3 from '@/assets/images/brands/brand-light-03.svg';
import logoLight4 from '@/assets/images/brands/brand-light-04.svg';
import logoLight5 from '@/assets/images/brands/brand-light-05.svg';
import logoLight6 from '@/assets/images/brands/brand-light-06.svg';

// Dark
import logoDark1 from '@/assets/images/brands/brand-dark-01.svg';
import logoDark2 from '@/assets/images/brands/brand-dark-02.svg';
import logoDark3 from '@/assets/images/brands/brand-dark-03.svg';
import logoDark4 from '@/assets/images/brands/brand-dark-04.svg';
import logoDark5 from '@/assets/images/brands/brand-dark-05.svg';
import logoDark6 from '@/assets/images/brands/brand-dark-06.svg';

const logosLight = [logoLight1, logoLight2, logoLight3, logoLight4, logoLight5, logoLight6];
const logosDark = [logoDark1, logoDark2, logoDark3, logoDark4, logoDark5, logoDark6];

export const PartnersSection = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => setIsDark(document.documentElement.classList.contains('dark'));
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const logos = isDark ? logosDark : logosLight;

  return (
    <>
      <section className="section section--bg">
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
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <img src={logo} alt={`Client ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};
