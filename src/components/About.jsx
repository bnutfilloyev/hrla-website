'use client';
import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.textGrid}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.titleWrapper}
          >
            <h2 className={styles.title}>
              TADBIR <br />
              <span className={styles.highlight}>MAQSADI</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.descWrapper}
          >
            <p className={styles.description}>
              Konferensiyaning asosiy maqsadi: Oʻzbekiston HR tizimini rivojlantirish, mahalliy mutaxassislarni birlashtirish va kadrlar boshqaruvida zamonaviy yondashuvlarni keng joriy etishga xizmat qiluvchi professional maydon yaratish.
            </p>
            <div className={styles.stats}>
              <div className={styles.statBox}>
                <h3>150+</h3>
                <p>Qatnashuvchilar</p>
              </div>
              <div className={styles.statBox}>
                <h3>O'zbek Tilidagi</h3>
                <p>Ilk HR yig'ilishi</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
