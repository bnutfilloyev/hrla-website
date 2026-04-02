'use client';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Briefcase } from 'lucide-react';
import styles from './Benefits.module.css';

const benefits = [
  {
    icon: <TrendingUp size={32} />,
    title: "HR TIZIMINI QURISH",
    desc: "Kompaniyada xodimlar boshqaruvini 0 dan tizimlashtirish hamda raqobatbardosh holatda takomillashtirish bo'yicha qo'llanma va metodikalar."
  },
  {
    icon: <Users size={32} />,
    title: "KUCHLI NETWORKING",
    desc: "100+ yetakchi kompaniyalar rahbarlari va HR mutaxassislari bilan yuzma-yuz tanishuv."
  },
{
    icon: <Briefcase size={32} />,
    title: "BOSHQARUV INSTRUMENTLARI",
    desc: "Zamonaviy mehnat bozorida jamoani saqlab qolish va KPI ko'rsatkichlarini samarali belgilash bo'yicha amaliy qo'llanmalar."
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
          <p className={styles.subtitle}>Konferensiya nafaqat bilim, balki aniq amaliy ko'nikmalar beradi.</p>
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
