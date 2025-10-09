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
  facebook: FaFacebookF,
  twitter: FaTwitter,
  x: FaXTwitter,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  google: FaGoogle,
  github: FaGithub,
  behance: FaBehance,
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
          const Icon = ICONS[key];
          if (!Icon) return null;
          return (
            <div key={key} className={clsx(styles.iconWrapper, styles[`icon-${key}`])}>
              <Icon className={styles.icon} />
            </div>
          );
        })}
      </div>
    </>
  );
};
