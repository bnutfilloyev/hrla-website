'use client';
import { motion } from 'framer-motion';
import styles from './Tickets.module.css';

const tickets = [
  {
    name: "Standart",
    price: "1,500,000 UZS",
    features: [
      "To'liq kunlik qatnashish",
      "Kofe-breyk va Tushlik",
      "Umumiy zalda joylashuv",
      "Qatnashchilar bilan netvorking",
      "Sertifikat va bloknot"
    ]
  },
  {
    name: "VIP",
    price: "3,000,000 UZS",
    isPopular: true,
    features: [
      "Standart paketdagi barcha afzalliklar",
      "VIP zonada joylashuv",
      "Spikerlar bilan yopiq netvorking tushligi",
      "Videomateriallarga to'liq huquq",
      "Sovg'alar to'plami"
    ]
  },
  {
    name: "Korporativ",
    price: "Kelishuv asosida",
    features: [
      "5 va undan ortiq xodimlar uchun",
      "Barcha standart afzalliklar",
      "Maxsus kompaniya chegirmasi",
      "Korporativ joylashtirish",
      "Maxsus hisobot va tahlillar"
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
