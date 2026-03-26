'use client';
import { motion } from 'framer-motion';
import styles from './Partners.module.css';

const partners = [
  "ODDIY CONSULT", "HR METRICS", "MAHKAMOV STX", 
  "TALENT AQUA", "SAP UZBEKISTAN", "GOOGLE HR", "KORZINKA", "PAYME", "CLICK"
];

export default function Partners() {
  return (
    <section className={styles.partners}>
      <div className={styles.container}>
        <p className={styles.title}>KONFERENSIYAMIZ HAMKORLARI VA ISHTIROKCHI KOMPANIYALAR</p>
        <div className={styles.marqueeContainer}>
          <div className={styles.marquee}>
            {[...partners, ...partners].map((partner, i) => (
              <div key={i} className={styles.partnerLogo}>
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
