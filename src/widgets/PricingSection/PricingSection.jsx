import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/shared/lib/animations';
import { Button } from '@/shared/ui/Button';
import { ShapeBackground } from '@/shared/ui/ShapeBackground';
import styles from './PricingSection.module.scss';

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      title: 'Starter',
      price: { monthly: 29, annually: 299 },
      buttonVariant: 'pink',
    },
    {
      title: 'Growth Plan',
      price: { monthly: 59, annually: 599 },
      buttonVariant: 'primary',
    },
    {
      title: 'Business',
      price: { monthly: 139, annually: 1399 },
      buttonVariant: 'pink',
    },
  ];

  return (
    <>
      <section className="section section--bg" id="pricing">
        <div className="container ">
          <div className={styles.pricingWrapper}>
            <div className="header">
              <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                We Offer Great Affordable <br /> Premium Prices.
              </motion.h2>
              <motion.p
                className="description"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
              >
                It is a long established fact that a reader will be distracted by the readable content <br />
                of a page when looking at its layout. The point of using.
              </motion.p>

              <div className={styles.toggleWrapper}>
                <span>Bill Monthly</span>
                <label className={styles.switch}>
                  <input type="checkbox" checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} />
                  <span className={styles.slider}></span>
                </label>
                <span>Bill Annually</span>
              </div>
            </div>

            <motion.div
              className={styles.cards}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {plans.map((plan, i) => (
                <motion.div key={plan.title} className={styles.card} variants={fadeIn} custom={i}>
                  <h3>{plan.title}</h3>
                  <p className={styles.price}>
                    ${isAnnual ? plan.price.annually : plan.price.monthly}
                    <span>/per {isAnnual ? 'year' : 'month'}</span>
                  </p>
                  <p className="description">No credit card required</p>

                  <Button variant={plan.buttonVariant} className={styles.btnCustom}>
                    Try for free
                  </Button>

                  <ul>
                    <li>400 GB Storage</li>
                    <li>Unlimited Photos & Videos</li>
                    <li>Exclusive Support</li>
                  </ul>

                  <span className={styles.trial}>7-day free trial</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <ShapeBackground variant="pricing" />
      </section>
    </>
  );
};
