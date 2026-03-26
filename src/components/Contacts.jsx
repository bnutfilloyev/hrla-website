import styles from './Contacts.module.css';

export default function Contacts() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <img src="/hrla-white-logo.png" alt="HRLA" className={styles.logo} />
            <p className={styles.desc}>
              Oʻzbekistondagi ilk HR va Marketing konferensiyasi. <br/>
              Kadrlar boshqaruvida yangi davr boshlanmoqda.
            </p>
          </div>
          
          <div className={styles.contactBlock}>
            <h3>Tashkilotchi</h3>
            <p>“Oddiy Consult”</p>
          </div>
          
          <div className={styles.contactBlock}>
            <h3>Aloqa UCHUN</h3>
            <p><a href="tel:+998508903333">+998 50 890 33 33</a></p>
            <p><a href="tel:+998508909944">+998 50 890 99 44</a></p>
          </div>
          
          <div className={styles.contactBlock}>
            <h3>Ijtimoiy Tarmoqlar</h3>
            <p><a href="https://instagram.com/lavozim_uz" target="_blank" rel="noopener noreferrer">@lavozim_uz</a></p>
            <p>Telegram & Email</p>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; 2026 HRLA (Oddiy Consult). Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
}
