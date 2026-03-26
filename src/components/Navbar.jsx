'use client';
import { useState, useEffect } from 'react';
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

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
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
        Ro'yxatdan o'tish
      </button>
    </nav>
  );
}
