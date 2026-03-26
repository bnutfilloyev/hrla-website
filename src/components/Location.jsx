'use client';
import { motion } from 'framer-motion';
import { MapPin, Car, Briefcase } from 'lucide-react';
import styles from './Location.module.css';

export default function Location() {
  return (
    <section className={styles.location}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.info}
          >
            <h2 className={styles.title}>LOKATSIYA VA QULAYLIKLAR</h2>
            <div className={styles.details}>
              <div className={styles.detailBox}>
                <div className={styles.icon}><MapPin size={28} color="var(--accent-color)" /></div>
                <div>
                  <h3>Manzil</h3>
                  <p>Toshkent shahri, Premium Konferensiyalar Zali</p>
                </div>
              </div>
              <div className={styles.detailBox}>
                <div className={styles.icon}><Car size={28} color="var(--accent-color)" /></div>
                <div>
                  <h3>Avtoturargoh</h3>
                  <p>Qatnashchilar uchun maxsus bepul avtoturargoh mavjud</p>
                </div>
              </div>
              <div className={styles.detailBox}>
                <div className={styles.icon}><Briefcase size={28} color="var(--accent-color)" /></div>
                <div>
                  <h3>Dress-code</h3>
                  <p>Business / Business Casual</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className={styles.mapWrapper}
          >
            <div className={styles.mapDecoration}>
              <div className={styles.mapHolder}>
                <p>Xarita Bu Yerda Joylashadi</p>
                <div className={styles.mapDot}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
