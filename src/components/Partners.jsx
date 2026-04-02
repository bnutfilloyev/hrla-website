'use client';
import { motion } from 'framer-motion';
import styles from './Partners.module.css';

const partners = [
  "/sponsors/med brand png logosArtboard 14@4x.png",
  "/sponsors/oddiy png.png",
  "/sponsors/inhunter color png.png"
];

// Repeat to fill the marquee
const repeatedPartners = [...partners, ...partners, ...partners, ...partners, ...partners, ...partners];

export default function Partners() {
  return (
    <section className={styles.partners}>
      <div className={styles.container}>
        <p className={styles.title}>KONFERENSIYAMIZ HAMKORLARI VA ISHTIROKCHI KOMPANIYALAR</p>
        <div className={styles.marqueeContainer}>
          <div className={styles.marquee}>
            {repeatedPartners.map((src, i) => (
              <img key={i} src={src} alt="Sponsor Logo" className={styles.partnerLogo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
