'use client';
import { motion } from 'framer-motion';
import { Play, Camera } from 'lucide-react';
import styles from './Gallery.module.css';

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.title}>OLDINGI <span className={styles.highlight}>TADBIRLARIMIZ</span></h2>
          <p className={styles.subtitle}>Batafsil ko'rinish uchun videolarni tomosha qiling</p>
        </motion.div>

        <div className={styles.videoGrid}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={styles.comingSoon}
          >
            <Camera size={48} strokeWidth={1.5} />
            <h3>Video tez orada</h3>
            <p>Oldingi tadbirlarimizning video lavhalari tayyorlanmoqda</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={styles.comingSoon}
          >
            <Play size={48} strokeWidth={1.5} />
            <h3>Highlights</h3>
            <p>Eng yaxshi lahzalar va spikerlar nutqlari</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
