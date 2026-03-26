'use client';
import { motion } from 'framer-motion';
import styles from './Speakers.module.css';

const speakers = [
  { name: 'Avazbek Orzimatov', role: 'HR Transformatsiya arxitektori & “Oddiy Consult” asoschisi', img: 'https://i.pravatar.cc/500?img=11' },
  { name: 'G’olibjon Mirabdullayev', role: 'HR Direktor, InfinBank', img: 'https://i.pravatar.cc/500?img=59' },
  { name: 'Lazizbek Mamatov', role: 'HRD, Artel', img: 'https://i.pravatar.cc/500?img=60' },
  { name: 'Sardor Zunnunov', role: 'CHRO - Merit Chemicals / HR Consultant', img: 'https://i.pravatar.cc/500?img=53' },
  { name: 'Asrorjon Azimov', role: 'HRD, Biznesni Rivojlantirish Banki', img: 'https://i.pravatar.cc/500?img=51' },
  { name: 'Saule Sadullaeva', role: 'HRD, UzTMK AJ', img: 'https://i.pravatar.cc/500?img=47' },
];

export default function Speakers() {
  return (
    <section className={styles.speakers}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>SPIKERLAR</h2>
        </motion.div>

        <div className={styles.grid}>
          {speakers.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <img src={s.img} alt={s.name} className={styles.image} />
                <div className={styles.overlay}>
                  <div className={styles.info}>
                    <h3 className={styles.name}>{s.name}</h3>
                    <p className={styles.role}>{s.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
