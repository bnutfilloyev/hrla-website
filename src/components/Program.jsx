'use client';
import { motion } from 'framer-motion';
import styles from './Program.module.css';

const schedule = [
  { time: '09:00 - 10:00', label: 'Tushlikkacha', event: 'Ochilish va Panel Muhokamalar', details: 'HR mutaxassislari, direktorlar va biznes vakillari o’rtasida netvorking va ochiq muloqot.' },
  { time: '10:00 - 11:30', label: 'Asosiy', event: 'Kompensatsiyalarga Asoslangan Yondashuv', details: 'G’olibjon Mirabdullayev bilan xodimlarni boshqarish sirlari.' },
  { time: '11:45 - 13:00', label: 'Tahliliy', event: 'HR va Biznes O’rtasidagi Muammolar', details: 'Lazizbek Mamatovning yillar davomida orttirgan tajribalariga tayanadigan chuqur tahlil.' },
  { time: '14:00 - 15:30', label: 'Innovatsion', event: 'O’zbekistonda HR Global Raqobat', details: 'Sardor Zunnunov hamda Asrorjon Azimov boshchiligidagi tarmoqli kompaniya filiallari uchun tizimlar joriy etish haqida.' },
  { time: '16:00 - 17:30', label: 'Tushlikdan so\'ng', event: 'Masterclass: KPI tizimini qurish', details: 'Saule Sadullaeva bilan xodimlarni baholashning KPI tizimi amaliyoti.' },
  { time: '17:30 - 18:30', label: 'Kechki', event: 'Xulosa va Netvorking', details: 'Coffee-break, tarmoq uchrashuvlari va materiallarni ulashish.' },
];

export default function Program() {
  return (
    <section className={styles.program}>
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
