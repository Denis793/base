import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import { fadeIn, staggerContainer } from '@/shared/lib/animations';
import { contactValidationSchema } from '@/shared/utils/validation';
import { handleContactSubmit } from '@/shared/utils/formHandlers';
import { Button } from '@/shared/ui/Button';
import { ShapeBackground } from '@/shared/ui/ShapeBackground';
import { FormToast } from '@/shared/ui/FormToast';
import { InputField } from '@/shared/ui/InputField';
import { Social } from '@/shared/ui/Social';
import styles from './ContactSection.module.scss';

export const ContactSection = () => {
  const [toast, setToast] = useState({ show: false, type: '', message: '' });

  const formik = useFormik({
    initialValues: { fullName: '', email: '', phone: '', subject: '', message: '' },
    validationSchema: contactValidationSchema,
    onSubmit: (values, helpers) => handleContactSubmit(values, helpers, setToast),
  });

  const isDisabled = formik.isSubmitting;

  const touchAllAndValidate = () => {
    const allTouched = Object.keys(formik.values).reduce((acc, key) => ({ ...acc, [key]: true }), {});
    formik.setTouched(allTouched, true);
  };

  return (
    <section className={`section section--bg ${styles.contactSection}`} id="contact">
      <div className="container">
        <div className="header">
          <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Let’s Stay Connected
          </motion.h2>
          <motion.p
            className="description"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            Contact us for inquiries, collaborations, or project discussions.
          </motion.p>
        </div>

        <motion.div
          className={styles.wrapper}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className={styles.infoBox} variants={fadeIn} custom={0}>
            <div className={styles.infoGroup}>
              <h4>Email Address</h4>
              <p className="description">support@startup.com</p>
            </div>

            <div className={styles.infoGroup}>
              <h4>Office Location</h4>
              <p className="description">76/A, Green Valle, California, USA</p>
            </div>

            <div className={styles.infoGroup}>
              <h4>Phone Number</h4>
              <p className="description">+009 8754 3433 223</p>
            </div>

            <div className={styles.social}>
              <Social align="left" variant="light" networks={['facebook', 'x', 'linkedin', 'behance']} />
            </div>
          </motion.div>

          <motion.div variants={fadeIn} custom={1}>
            <form className={styles.form} onSubmit={formik.handleSubmit} noValidate>
              <FormToast
                show={toast.show}
                type={toast.type}
                message={toast.message}
                onHide={() => setToast({ show: false, type: '', message: '' })}
              />

              <div className={styles.formGrid}>
                <InputField name="fullName" placeholder="Full name" formik={formik} />
                <InputField name="email" type="email" placeholder="Email address" formik={formik} />
              </div>

              <div className={styles.formGrid}>
                <InputField name="phone" type="tel" placeholder="Phone number" formik={formik} />
                <InputField name="subject" placeholder="Subject" formik={formik} />
              </div>

              <InputField name="message" as="textarea" placeholder="Message" formik={formik} rows={5} />

              <Button variant="primary" type="submit" disabled={isDisabled} onClick={touchAllAndValidate}>
                {formik.isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      <ShapeBackground />
    </section>
  );
};
