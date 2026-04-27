import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <button className={styles.logo} onClick={() => scrollToSection('hero')}>
          <div className={styles.logoIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#10b981"/>
              <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#10b981" opacity="0.7"/>
              <rect x="3" y="14" width="7" height="7" rx="1.5" fill="#10b981" opacity="0.7"/>
              <rect x="14" y="14" width="7" height="7" rx="1.5" fill="#10b981" opacity="0.4"/>
            </svg>
          </div>
          <span className={styles.logoText}>ScanYCall</span>
        </button>

        <ul className={styles.navLinks}>
          <li><button onClick={() => scrollToSection('hero')} className={styles.navLink}>Home</button></li>
          <li><button onClick={() => scrollToSection('features')} className={styles.navLink}>Features</button></li>
          <li><button onClick={() => scrollToSection('app-preview')} className={styles.navLink}>App</button></li>
          <li><button onClick={() => scrollToSection('about')} className={styles.navLink}>About</button></li>
          <li>
            <button onClick={() => scrollToSection('cta')} className={styles.ctaButton}>
              Get Started
            </button>
          </li>
        </ul>

        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileNavLinks}>
          <li><button onClick={() => scrollToSection('hero')} className={styles.mobileNavLink}>Home</button></li>
          <li><button onClick={() => scrollToSection('features')} className={styles.mobileNavLink}>Features</button></li>
          <li><button onClick={() => scrollToSection('app-preview')} className={styles.mobileNavLink}>App Preview</button></li>
          <li><button onClick={() => scrollToSection('about')} className={styles.mobileNavLink}>About</button></li>
          <li>
            <button onClick={() => scrollToSection('cta')} className={styles.mobileCta}>
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
