import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { menuItems } from '@/shared/config/menuConfig';
import { scrollWithOffset } from '@/shared/utils/scrollWithOffset';
import { BurgerIcon } from '@/shared/ui/BurgerIcon';
import { ThemeImage } from '@/shared/ui/ThemeImage';
import { ThemeToggle } from '@/shared/ui/ThemeToggle';
import { Button } from '@/shared/ui/Button';
import { FaChevronDown } from 'react-icons/fa';
import styles from './Header.module.scss';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      setScrollDirection(currentY > lastScrollY ? 'down' : 'up');
      lastScrollY = currentY <= 0 ? 0 : currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setMenuOpen(false);
    setSubmenuOpen(null);
  }, [location]);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setSubmenuOpen(null);
  };

  const handleSubmenuToggle = (label) => {
    setSubmenuOpen((prev) => (prev === label ? null : label));
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderLink = (item, onClick) => {
    if (item.to?.startsWith('#')) {
      return (
        <a
          href={item.to}
          onClick={(e) => {
            e.preventDefault();

            const scrollToSection = () => {
              const el = document.querySelector(item.to);
              if (el) scrollWithOffset(el);
            };

            if (location.pathname !== '/') {
              navigate('/');
              setTimeout(scrollToSection, 500);
            } else {
              scrollToSection();
            }

            onClick?.();
          }}
        >
          {item.label}
        </a>
      );
    }

    return (
      <Link to={item.to || item.href} onClick={onClick}>
        {item.label}
      </Link>
    );
  };

  return (
    <header
      className={clsx(styles.header, scrolled && styles.headerScrolled, scrollDirection === 'down' && styles.hidden)}
    >
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.headerLogo} onClick={handleLogoClick} aria-label="Go to home">
            <ThemeImage name="logo" alt="Logo" position="left" fit="contain" />
          </div>

          <div className={styles.menuWrapper}>
            <nav className={clsx(styles.nav, menuOpen && styles.open)}>
              <ul>
                {menuItems.map((item) => (
                  <li
                    key={item.label}
                    className={clsx(item.children && styles.dropdown, submenuOpen === item.label && styles.active)}
                  >
                    {item.children ? (
                      <>
                        <Button
                          className={styles.dropdownButton}
                          variant="secondary"
                          onClick={() => handleSubmenuToggle(item.label)}
                        >
                          {item.label}
                          <FaChevronDown className={clsx(styles.arrow, submenuOpen === item.label && styles.rotated)} />
                        </Button>
                        <ul className={clsx(styles.dropdownMenu, submenuOpen === item.label && styles.open)}>
                          {item.children.map((child) => (
                            <li key={child.label}>{renderLink(child, handleLinkClick)}</li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      renderLink(item, handleLinkClick)
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.actions}>
              <ThemeToggle />

              <Link className={styles.signIn} to="/signin">
                Sign In
              </Link>
              <Link className={styles.signUp} to="/signup">
                <Button variant="primary">Sign Up</Button>
              </Link>
            </div>

            <BurgerIcon isOpen={menuOpen} onClick={() => setMenuOpen((prev) => !prev)} />
          </div>
        </div>
      </div>
    </header>
  );
};
