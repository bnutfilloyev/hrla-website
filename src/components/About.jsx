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
              Oʻzbekistonda HR tizimini rivojlantirish, mahalliy, oʻzbekzabon mutaxassislarni birlashtirish, kadrlar boshqaruvida zamon bilan hamnafas yondashuvlarni keng tadbiq qilishga imkoniyat yaratib beruvchi koʻprik sifatida xizmat qilish.
            </p>
            <div className={styles.stats}>
              <div className={styles.statBox}>
                <h3>100+</h3>
                <p>Kompaniyalar</p>
              </div>
              <div className={styles.statBox}>
                <h3>Oʻzbek tilidagi</h3>
                <p>Birinchi HR Konferensiyasi</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
