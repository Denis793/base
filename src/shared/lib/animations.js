export const slideInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: 'easeOut',
    },
  }),
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: 'easeOut',
    },
  }),
};

export const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: 'easeOut',
    },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: 'easeOut',
    },
  }),
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: 'easeOut',
    },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
