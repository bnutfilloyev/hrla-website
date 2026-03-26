'use client';
import { motion } from 'framer-motion';
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
          {/* Example YouTube Generic Mocks: the user can drop real IDs below */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={styles.videoWrapper}
          >
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className={styles.videoWrapper}
          >
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
