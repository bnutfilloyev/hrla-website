'use client';
import { motion } from 'framer-motion';
import styles from './Program.module.css';

const schedule = [
  { time: '13:30 - 14:00', label: 'Ro\'yxatdan o\'tish', event: 'Registratsiya', details: 'Mehmonlarni kutib olish va ro\'yxatdan o\'tish' },
  { time: '14:00 - 14:15', label: 'Boshlovchi', event: 'Ochilish marosimi', details: 'Boshlovchi: Avazbek Orzimatov. Konferensiyaning rasmiy ochilishi' },
  { time: '14:15 - 14:45', label: 'Taqdimot', event: 'Lazizbek Mamatov', details: 'Mavzu: HR va Biznes o\'rtasidagi muammolar' },
  { time: '14:45 - 15:15', label: 'Taqdimot', event: 'Saule Sadullaeva', details: 'Mavzu: HR metrikalari va KPI' },
  { time: '15:15 - 15:45', label: 'Taqdimot', event: 'G\'olibjon Mirabdullayev', details: 'Mavzu: Xodimlarni boshqarishda kompetensiyaga asoslangan yondashuv' },
  { time: '15:45 - 16:15', label: 'Tanaffus', event: 'Coffee break', details: 'Coffee break va qatnashchilar o\'rtasida erkin Networking' },
  { time: '16:15 - 16:45', label: 'Taqdimot', event: 'Lola Razzakova', details: 'Mavzu: HR managment va xodimlarni boshqarish' },
  { time: '16:45 - 17:15', label: 'Taqdimot', event: 'Asrorjon Azimov', details: 'Mavzu: Tarmoqli kompaniya filiallari uchun HR tizimini joriy etish: transformatsiya jarayonida rahbariyat va jamoa o\'rtasidagi o\'zgarishlarni samarali boshqarish' },
  { time: '17:15 - 18:00', label: 'Taqdimot', event: 'Sardor Zununov', details: 'Mavzu: O\'zbekistonda va chet elda (rivojlangan mamlakatlarda) HR va xodimlar o\'rtasidagi farq' },
  { time: '18:00 - 19:00', label: 'Kechki muhokama', event: 'Panel diskussiya', details: 'Barcha spikerlar ishtirokida ochiq muhokama va savol-javoblar sessiyasi' }
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
