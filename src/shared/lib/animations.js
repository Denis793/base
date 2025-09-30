// === Універсальні анімації ===

// Зліва направо
export const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

// Справа наліво
export const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

// Зверху вниз
export const slideInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: 'easeOut' },
  }),
};

// Fade in
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.2, ease: 'easeOut' },
  }),
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.2, ease: 'easeOut' },
  }),
};

export const rotateInfinite = {
  hidden: { rotate: 0 },
  visible: {
    rotate: 360,
    transition: { duration: 20, ease: 'linear', repeat: Infinity },
  },
};
