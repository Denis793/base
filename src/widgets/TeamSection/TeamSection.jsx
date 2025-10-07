import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, rotateInfinite } from '@/shared/lib/animations';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import shapeCircle from '@/assets/images/shape/shape-10.svg';
import shapeTriangleOrange from '@/assets/images/shape/shape-09.svg';
import shapeTrianglePink from '@/assets/images/shape/shape-11.svg';

import team1 from '@/assets/images/team/team-01.png';
import team2 from '@/assets/images/team/team-02.png';
import team3 from '@/assets/images/team/team-03.png';

import styles from './TeamSection.module.scss';

export const TeamSection = () => {
  const members = [
    { img: team1, name: 'Olivia Andrium', role: 'Product Manager' },
    { img: team2, name: 'Jemse Kemorun', role: 'Product Designer' },
    { img: team3, name: 'Avi Pestarica', role: 'Web Designer' },
  ];

  return (
    <>
      <section className="section section--bg" id="team">
        <div className={styles.bgWrapper}>
          <motion.img
            src={shapeCircle}
            alt="Circle shape"
            className={styles.shapeCircle}
            variants={rotateInfinite}
            initial="hidden"
            animate="visible"
          />

          <motion.img
            src={shapeTriangleOrange}
            alt="Orange triangle"
            className={styles.shapeOrange}
            variants={rotateInfinite}
            initial="hidden"
            animate="visible"
          />

          <motion.img
            src={shapeTrianglePink}
            alt="Pink triangle"
            className={styles.shapePink}
            variants={rotateInfinite}
            initial="hidden"
            animate="visible"
          />
        </div>

        <div className="container">
          <div className="header">
            <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Meet With Our Creative <br /> Dedicated Team
            </motion.h2>
            <motion.p
              className="description"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor
              lacus. Phasellus aliquam ante in maximus.
            </motion.p>
          </div>

          {/* Members */}
          <div className={styles.members}>
            {members.map((m, i) => (
              <motion.div
                key={m.name}
                className={styles.memberCard}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <div className={styles.photo}>
                  <img src={m.img} alt={m.name} />

                  <div className={styles.socialOverlay}>
                    <div className={styles.overlayBlue}></div>
                    <div className={styles.overlayPink}></div>

                    <div className={styles.socialIcons}>
                      <FaFacebookF />
                      <FaTwitter />
                      <FaLinkedinIn />
                    </div>
                  </div>
                </div>

                <h4 className={styles.membersTitle}>{m.name}</h4>
                <span className="description">{m.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
