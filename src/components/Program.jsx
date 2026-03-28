'use client';
import { motion } from 'framer-motion';
import styles from './Program.module.css';

const schedule = [
  { time: '13:30 - 14:00', label: 'Tushlikkacha', event: 'Registratsiya', details: 'Mehmonlarni kutib olish va ro\'yxatdan o\'tish.' },
  { time: '14:00 - 14:15', label: 'Boshlovchi', event: 'Ochilish marosimi', details: 'Boshlovchi: Avazbek Orzimatov. Konferensiyaning rasmiy ochilishi.' },
  { time: '14:15 - 15:15', label: 'Taqdimot', event: 'Saule Sadullayeva', details: 'Spikerning maxsus mavzudagi taqdimoti va amaliy holatlar tahlili.' },
  { time: '15:15 - 15:45', label: 'Taqdimot', event: 'Lazizbek Mamatov', details: 'Ishlab chiqarish sektorida HR innovatsiyalar bo\'yicha tahlil.' },
  { time: '15:45 - 16:15', label: 'Tanaffus', event: 'Coffee time', details: 'Kofe-breyk va qatnashchilar o\'rtasida erkin netvorking.' },
  { time: '16:15 - 17:00', label: 'Taqdimot', event: 'Sardor Zunnunov', details: 'Xalqaro kompaniyalarda HR boshqaruv modellari mavzusi.' },
  { time: '17:00 - 17:30', label: 'Taqdimot', event: 'G\'olibjon Mirabdullayev', details: 'Bank sektorida zamonaviy HR yondashuvlar muhokamasi.' },
  { time: '17:30 - 18:00', label: 'Taqdimot', event: 'Asrorjon Azimov', details: 'Xodimlar rivojlanishi va performance management usullari.' },
  { time: '18:00 - 19:00', label: 'Kechki muhokama', event: 'Panel diskussiya', details: 'Barcha spikerlar ishtirokida ochiq muhokama va savol-javoblar sessiyasi.' }
];

export default function Program() {
  return (
    <section id="program" className={styles.program}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>KUN TARTIBI</h2>
          <p className={styles.subtitle}>Konferensiya dasturi bilan tanishing</p>
        </motion.div>

        <div className={styles.timeline}>
          {schedule.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={styles.timelineItem}
            >
              <div className={styles.timeBlock}>
                <span className={styles.time}>{item.time}</span>
                <span className={styles.label}>{item.label}</span>
              </div>
              <div className={styles.marker}>
                <div className={styles.dot}></div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.eventName}>{item.event}</h3>
                {item.details && <p className={styles.eventDetails}>{item.details}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
