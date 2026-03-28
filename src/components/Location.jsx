'use client';
import { motion } from 'framer-motion';
import { MapPin, Car, Briefcase } from 'lucide-react';
import styles from './Location.module.css';

export default function Location() {
  return (
    <section id="location" className={styles.location}>
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
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className={styles.mapWrapper}
          >
            <div className={styles.mapHolder}>
              <iframe 
                src="https://yandex.uz/map-widget/v1/?ll=69.250000%2C41.316667&z=13&mode=whatshere" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allowFullScreen={true}
                style={{ position: "absolute", top: 0, left: 0, border: "none", borderRadius: "30px" }}
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
