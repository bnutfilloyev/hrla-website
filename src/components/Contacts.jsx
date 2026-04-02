import styles from './Contacts.module.css';

const TelegramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

export default function Contacts() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <img src="/hrla-white-logo.png" alt="HRLA" className={styles.logo} />
            <p className={styles.desc}>
              O'zbekistondagi birinchi HR konferensiyasi. <br/>
              Kadrlar boshqaruvida yangi davr boshlanmoqda.
            </p>
          </div>
          
          <div className={styles.contactBlock}>
            <h3>Tashkilotchi</h3>
            <div className={styles.organizerList}>
              <a href="https://oddiyconsult.uz/" target="_blank" rel="noopener noreferrer" className={styles.organizerBadge}>Oddiy Consult</a>
              <a href="https://medbrand.uz" target="_blank" rel="noopener noreferrer" className={styles.organizerBadge}>MedBrend</a>
              <a href="https://inhunter.uz/ru" target="_blank" rel="noopener noreferrer" className={styles.organizerBadge}>Inhunter</a>
            </div>
          </div>
          
          <div className={styles.contactBlock}>
            <h3>ALOQA UCHUN</h3>
            <p><a href="tel:+998508909933">+998 50 890 99 33</a></p>
            <p><a href="tel:+998508909944">+998 50 890 99 44</a></p>
          </div>
          
          <div className={styles.contactBlock}>
            <h3>Ijtimoiy Tarmoqlar</h3>
            <a href="https://t.me/hrla_admin" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <TelegramIcon /> @hrla_admin
            </a>
            <a href="https://t.me/hrla_manager" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <TelegramIcon /> @hrla_manager
            </a>
            <a href="https://www.instagram.com/lavozim_uz" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <InstagramIcon /> @lavozim_uz
            </a>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; 2026 HRLA. Barcha huquqlar himoyalangan.</p>
          <p className={styles.madeBy}>
            Built by{' '}
            <a href="https://proxora.uz" target="_blank" rel="noopener noreferrer">
              Proxora Global
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
