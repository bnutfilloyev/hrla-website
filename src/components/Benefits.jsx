'use client';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Briefcase } from 'lucide-react';
import styles from './Benefits.module.css';

const benefits = [
  {
    icon: <TrendingUp size={32} />,
    title: "HR Tizim Yaratish",
    desc: "Kompaniyada xodimlarni boshqarish bo'yicha nol-dan tizim qurish shablonlari va metodikalari."
  },
  {
    icon: <Users size={32} />,
    title: "Kuchli Netvorking",
    desc: "500 dan ortiq yetakchi kompaniyalar rahbarlari va HR mutaxassislari bilan yuzma-yuz tanishuv."
  },
  {
    icon: <Target size={32} />,
    title: "Sotuv va HR Balansi",
    desc: "Xodimlar unumdorligini oshirish orqali to'g'ridan-to'g'ri biznes daromadini (RoI) o'stirish sirlari."
  },
  {
    icon: <Briefcase size={32} />,
    title: "Boshqaruv Instrumentlari",
    desc: "Zamonaviy raqobatli bozorda jamoani ushlab qolish va KPI ko'rsatkichlarini to'g'ri o'rnatish qo'llanmalari."
  }
];

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.title}>SIZ QANDAY <span className={styles.highlight}>NATIJA OLASIZ?</span></h2>
          <p className={styles.subtitle}>Konferensiya nafaqat bilim, balki aniq amaliy instrumentlar beradi.</p>
        </motion.div>

        <div className={styles.grid}>
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={styles.card}
            >
              <div className={styles.iconBox}>{b.icon}</div>
              <h3 className={styles.cardTitle}>{b.title}</h3>
              <p className={styles.cardDesc}>{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
