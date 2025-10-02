import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { menuItems } from '@/shared/config/menuConfig';
import { BurgerIcon } from '@/shared/ui/BurgerIcon';
import { ThemeToggle } from '@/shared/ui/ThemeToggle';
import { Button } from '@/shared/ui/Button';
import { FaChevronDown } from 'react-icons/fa';
import logoLight from '@/assets/images/logo/logo-light.svg';
import logoDark from '@/assets/images/logo/logo-dark.svg';
import styles from './Header.module.scss';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (window.scrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setSubmenuOpen(null);
  };

  const handleSubmenuToggle = (label) => {
    setSubmenuOpen(submenuOpen === label ? null : label);
  };

  const renderLink = (item, onClick) => {
    if (item.to?.startsWith('#')) {
      return (
        <HashLink smooth to={item.to} onClick={onClick}>
          {item.label}
        </HashLink>
      );
    }
    return (
      <Link to={item.to || item.href} onClick={onClick}>
        {item.label}
      </Link>
    );
  };

  return (
    <>
      <header
        className={clsx(styles.header, scrolled && styles.headerScrolled, scrollDirection === 'down' && styles.hidden)}
      >
        <div className="container">
          <div className={styles.headerWrapper}>
            <div className={styles.logo}>
              <Link to="/">
                <img src={isDark ? logoLight : logoDark} alt="Logo" />
              </Link>
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
                          <Button variant="secondary" onClick={() => handleSubmenuToggle(item.label)}>
                            {item.label}
                            <FaChevronDown
                              className={clsx(styles.arrow, submenuOpen === item.label && styles.rotated)}
                            />
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
    </>
  );
};
