'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const TARGET_DATE = new Date('2026-04-26T09:00:00+05:00');

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = Math.max(0, TARGET_DATE - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}

export default function Hero() {
  const countdown = useCountdown();
  const scrollToTickets = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>

      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.typographyColumn}
        >
          <div className={styles.badge}>MUKAMMAL HR STRATEGIYALARI</div>
          <h1 className={styles.title}>
            XODIMLAR BOSHQARUVIDA <br/>
            <span className={styles.highlight}>YANGI DAVR</span>
          </h1>
          <p className={styles.subtitle}>
            O'zbek tilidagi ilk HR konferensiyasi.
          </p>
          <button className={styles.primaryBtn} onClick={scrollToTickets}>
            QATNASHISH UCHUN RO'YXATDAN O'TISH
          </button>

          <div className={styles.countdown}>
            {[['days','KUN'],['hours','SOAT'],['minutes','DAQ'],['seconds','SON']].map(([key, label]) => (
              <div key={key} className={styles.countdownUnit}>
                <span className={styles.countdownValue}>{String(countdown[key]).padStart(2,'0')}</span>
                <span className={styles.countdownLabel}>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.visualColumn}
        >
          <div className={styles.brandShowcase}>
            <div className={styles.glowBackground}></div>
            <img src="/hrla-green-logo.png" alt="HRLA Brand" className={styles.mainLogo} />
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={styles.floatingCard1}
            >
              <span className={styles.cardValue}>150+</span>
              <span className={styles.cardLabel}>Qatnashchilar</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className={styles.floatingCard2}
            >
              <span className={styles.cardValue}>6+</span>
              <span className={styles.cardLabel}>Top Ekspertlar</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
