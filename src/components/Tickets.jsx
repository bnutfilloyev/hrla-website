'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Tickets.module.css';

const TARGET_DATE = new Date('2026-04-10T23:59:59+05:00');

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: false, initialized: false });

  useEffect(() => {
    const calc = () => {
      const diff = Math.max(0, TARGET_DATE - Date.now());
      if (diff === 0) {
        setTimeLeft(prev => prev.expired ? prev : { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true, initialized: true });
      } else {
        setTimeLeft({
          days: Math.floor(diff / 86400000),
          hours: Math.floor((diff % 86400000) / 3600000),
          minutes: Math.floor((diff % 3600000) / 60000),
          seconds: Math.floor((diff % 60000) / 1000),
          expired: false,
          initialized: true
        });
      }
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}

const tickets = [
  {
    id: 'standard',
    name: "Standart",
    price: "900,000 UZS",
    discountPrice: "720,000 UZS",
    discountPercent: "-20%",
    isPopular: true,
    features: [
      "Tadbirkorlar va HR mutaxassislari uchun",
      "To'liq kunlik qatnashish",
      "Umumiy zalda joylashuv",
      "Qatnashchilar bilan Networking",
      "Sertifikat elektronniy beriladi",
      "Coffee break"
    ]
  },
  {
    id: 'corp',
    name: "Korporativ",
    price: "20-30% gacha CHEGIRMA",
    features: [
      "3 va undan ortiq xodimlar uchun kelishuv asosida",
      "Barcha standart afzalliklar",
      "Korporativ ketma-ket joylashtirish",
      "Jamoaviy Networking imkoniyati",
      "Sertifikat elektronniy beriladi"
    ]
  }
];

export default function Tickets() {
  const countdown = useCountdown();

  const scrollToForm = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="tickets" className={styles.tickets}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>CHIPTALAR</h2>
          <p className={styles.subtitle}>
            Ro'yxatdan tezroq o'ting, joylar soni cheklangan. Erta ro'yxatdan o'tganlarga qo'shimcha chegirmalar mavjud.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {tickets.map((ticket, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${styles.card} ${ticket.isPopular ? styles.popular : ''}`}
            >
              {ticket.isPopular && <div className={styles.popularBadge}>Keng Tavsiya Etiladi</div>}
              <h3 className={styles.cardTitle}>{ticket.name}</h3>
              
              {ticket.id === 'standard' && countdown.initialized && !countdown.expired ? (
                <div className={styles.priceContainer}>
                  <div className={styles.oldPrice}>{ticket.price}</div>
                  <div className={styles.price}>
                    {ticket.discountPrice}
                    <span className={styles.discountPill}>{ticket.discountPercent}</span>
                  </div>
                  <div className={styles.urgencyText}>10-apreldan so'ng narx qimmatlashadi!</div>
                </div>
              ) : ticket.id === 'standard' && countdown.initialized && countdown.expired ? (
                <div className={styles.priceContainer}>
                  <div className={styles.price}>{ticket.price}</div>
                  <div className={styles.expiredNotice}>Erta to'lov chegirmasi tugagan</div>
                </div>
              ) : (
                <div className={styles.priceContainer}>
                  <div className={styles.price}>{ticket.price}</div>
                </div>
              )}

              {ticket.id === 'standard' && countdown.initialized && !countdown.expired && (
                <div className={styles.countdownWrapper}>
                  <p className={styles.countdownLabel}>Chegirma tugashiga qoldi:</p>
                  <div className={styles.countdown}>
                    <div className={styles.countdownUnit}><span>{countdown.days}</span><small>Kun</small></div>
                    <div className={styles.countdownUnit}><span>{countdown.hours}</span><small>Soat</small></div>
                    <div className={styles.countdownUnit}><span>{countdown.minutes}</span><small>Daq</small></div>
                    <div className={styles.countdownUnit}><span>{countdown.seconds}</span><small>Son</small></div>
                  </div>
                </div>
              )}

              <ul className={styles.features}>
                {ticket.features.map((f, j) => (
                  <li key={j}>
                    <span className={styles.check}>✓</span> {f}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={scrollToForm} 
                className={`${styles.btn} ${ticket.isPopular ? styles.btnPrimary : styles.btnSecondary}`}
              >
                Tanlash
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
