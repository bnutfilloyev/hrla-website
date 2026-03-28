'use client';
import { motion } from 'framer-motion';
import styles from './Audience.module.css';

const roles = [
  "HR Mutaxassislari",
  "Kompaniya Direktorlari",
  "Tadbirkorlar",
];

export default function Audience() {
  return (
    <section className={styles.audience}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.contentBox}
        >
          <div className={styles.textContent}>
            <h2 className={styles.title}>KIM UCHUN?</h2>
            <p className={styles.subtitle}>
              Agar sizning maqsadingiz o'z sohangizda yetakchilikni saqlab qolish va zamonaviy kadrlar boshqaruvidagi inqilobiy o'zgarishlardan xabardor bo'lish bo'lsa.
            </p>
          </div>

          <div className={styles.list}>
            {roles.map((role, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={styles.roleItem}
              >
                <div className={styles.line}></div>
                <span>{role}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
