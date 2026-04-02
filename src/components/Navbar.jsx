'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
  { id: 'about', label: 'Biz haqimizda' },
  { id: 'speakers', label: 'Spikerlar' },
  { id: 'program', label: 'Dastur' },
  { id: 'tickets', label: 'Chiptalar' },
  { id: 'faq', label: 'FAQ' },
  { id: 'location', label: 'Lokatsiya' },
];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length) {
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActive(top.target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const scrollToRegistration = () => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <img
          src="/hrla-dark-logo.png"
          alt="HRLA Logo"
          className={styles.logo}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />

        <div className={styles.links}>
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              className={`${styles.navLink} ${active === id ? styles.active : ''}`}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <button className={styles.ctaBtn} onClick={scrollToRegistration}>
          Roʻyxatdan oʻtish
        </button>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerLinks}>
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              className={`${styles.drawerLink} ${active === id ? styles.drawerActive : ''}`}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}
          <button className={styles.drawerCta} onClick={scrollToRegistration}>
            Roʻyxatdan oʻtish
          </button>
        </div>
      </div>

      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}
    </>
  );
}
