import { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from '@/config/menuConfig';
import { useStickyHeader } from '@/hooks/useStickyHeader';
import { BurgerIcon } from '@/components/UI/BurgerIcon/BurgerIcon';
import logoDark from '@/images/logo/logo-dark.svg';
import styles from './Header.module.scss';

export const Header = () => {
  const isSticky = useStickyHeader(20);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logoDark} alt="Logo" />
          </Link>
        </div>

        <BurgerIcon isOpen={menuOpen} onClick={() => setMenuOpen((prev) => !prev)} />

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.label} className={item.children ? styles.dropdown : ''}>
                {item.to ? (
                  <Link to={item.to} onClick={handleLinkClick}>
                    {item.label}
                  </Link>
                ) : (
                  <a href={item.href} onClick={handleLinkClick}>
                    {item.label}
                  </a>
                )}

                {item.children && (
                  <ul className={styles.dropdownMenu}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link to={child.to} onClick={handleLinkClick}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link to="/signin" className={styles.signIn}>
            Sign In
          </Link>
          <Link to="/signup" className={styles.signUp}>
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};
