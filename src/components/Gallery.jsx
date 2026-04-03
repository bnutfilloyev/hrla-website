'use client';
import { motion } from 'framer-motion';
import styles from './Gallery.module.css';

const videos = [
  { id: 'xbrONzv2IMw', title: 'HRLA Shorts #1' },
  { id: 'u7-EwwCVtno', title: 'HRLA Shorts #2' },
];

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
          <h2 className={styles.title}>IJTIMOIY <span className={styles.highlight}>TARMOQLARIMIZDAN VIDEOLAR</span></h2>
          <p className={styles.subtitle}>Batafsil koʻrinish uchun videolarni tomosha qiling</p>
        </motion.div>

        <div className={styles.videoGrid}>
          {videos.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={styles.phoneFrame}
            >
              <div className={styles.phoneNotch} />
              <div className={styles.videoWrapper}>
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.iframe}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
