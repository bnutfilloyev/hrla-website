'use client';
import { motion } from 'framer-motion';
import styles from './Tickets.module.css';

const tickets = [
  {
    name: "Standart",
    price: "900,000 UZS",
    features: [
      "10 aprelgacha ro'yxatdan o'tganlarga 720,000 UZS",
      "To'liq kunlik qatnashish va Coffee break",
      "Umumiy zalda joylashuv",
      "Qatnashchilar bilan Networking",
      "Sertifikat elektronniy beriladi"
    ]
  },
  {
    name: "VIP",
    price: "3,000,000 UZS",
    isPopular: true,
    features: [
      "Standart paketdagi barcha afzalliklar",
      "VIP zonada maxsus joylashuv",
      "Spikerlar bilan yopiq Networking tushligi",
      "Maxsus sovg'alar to'plami va materiallar",
      "Sertifikat elektronniy va qog'oz shaklida beriladi"
    ]
  },
  {
    name: "Korporativ",
    price: "30% gacha CHEGIRMA",
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
              <div className={styles.price}>{ticket.price}</div>
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
