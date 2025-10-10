import React from 'react';
import clsx from 'clsx';
import {
  FaFacebookF,
  FaTwitter,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGoogle,
  FaGithub,
  FaBehance,
} from 'react-icons/fa6';
import styles from './Social.module.scss';

const ICONS = {
  facebook: { icon: FaFacebookF, url: 'https://www.facebook.com/' },
  twitter: { icon: FaTwitter, url: 'https://twitter.com/' },
  x: { icon: FaXTwitter, url: 'https://x.com/' },
  linkedin: { icon: FaLinkedinIn, url: 'https://www.linkedin.com/' },
  instagram: { icon: FaInstagram, url: 'https://www.instagram.com/' },
  google: { icon: FaGoogle, url: 'https://google.com/' },
  github: { icon: FaGithub, url: 'https://github.com/' },
  behance: { icon: FaBehance, url: 'https://www.behance.net/' },
};

export const Social = ({
  networks = ['facebook', 'x', 'linkedin', 'github'],
  align = 'center',
  variant = 'default',
  size = 'm', // s | m | l
  className,
}) => {
  return (
    <>
      <div
        className={clsx(styles.socials, styles[`align-${align}`], styles[variant], styles[`size-${size}`], className)}
      >
        {networks.map((key) => {
          const network = ICONS[key];
          if (!network) return null;

          const Icon = network.icon;

          return (
            <a
              key={key}
              href={network.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${key} profile`}
              className={clsx(styles.iconWrapper, styles[`icon-${key}`])}
            >
              <Icon className={styles.icon} />
            </a>
          );
        })}
      </div>
    </>
  );
};
