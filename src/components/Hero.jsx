'use client';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  const scrollToTickets = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <nav className={styles.navBar}>
        <img src="/logo1.png" alt="HRLA Logo" className={styles.logo} />
        <button className={styles.navButton} onClick={scrollToTickets}>Chipta Xarid Qilish</button>
      </nav>

      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.typographyColumn}
        >
          <div className={styles.badge}>MUKAMMAL HR STRATEGIYALARI</div>
          <h1 className={styles.title}>
            BOSHQARUVDA <br/>
            <span className={styles.highlight}>YANGI DAVR</span>
          </h1>
          <p className={styles.subtitle}>
            O'zbekistonning eng ilg'or HR mutaxassislari, top-menejerlar va biznes egalarini birlashtiruvchi markaziy konferensiya. 
            Bugungi murakkab raqobatli bozorda jamoani qanday qilib munosib boshqarish va o'stirish sirlarini o'rganing.
          </p>
          <button className={styles.primaryBtn} onClick={scrollToTickets}>
            QATNASHISH UCHUN RO'YXATDAN O'TISH
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.visualColumn}
        >
          <div className={styles.brandShowcase}>
            <div className={styles.glowBackground}></div>
            <img src="/logo2.png" alt="HRLA Brand" className={styles.mainLogo} />
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={styles.floatingCard1}
            >
              <span className={styles.cardValue}>500+</span>
              <span className={styles.cardLabel}>Qatnashchilar</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className={styles.floatingCard2}
            >
              <span className={styles.cardValue}>10+</span>
              <span className={styles.cardLabel}>Top Ekspertlar</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
