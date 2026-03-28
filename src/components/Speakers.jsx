'use client';
import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Globe } from 'lucide-react';
import styles from './Speakers.module.css';

const speakers = [
  {
    name: "G'olibjon Mirabdullayev",
    role: 'HR Direktor, InfinBank',
    img: 'https://i.pravatar.cc/500?img=59',
    topic: 'Bank sektorida zamonaviy HR yondashuvlar',
    bio: "InfinBank HR departamentini boshqaradi. Moliya sektorida xodimlarni boshqarish, korporativ madaniyat va talant jalb qilish bo'yicha ekspert.",
    social: { linkedin: '#', website: '#' }
  },
  {
    name: 'Lazizbek Mamatov',
    role: 'HRD, Artel',
    img: 'https://i.pravatar.cc/500?img=60',
    topic: 'Ishlab chiqarish sektorida HR innovatsiyalar',
    bio: "O'zbekistonning eng yirik ishlab chiqarish kompaniyalaridan biri — Artel'da HR strategiyasini boshqaradi. 5000+ xodim bilan ishlash tajribasi.",
    social: { linkedin: '#', website: '#' }
  },
  {
    name: 'Sardor Zunnunov',
    role: 'CHRO - Merit Chemicals / HR Consultant',
    img: 'https://i.pravatar.cc/500?img=53',
    topic: 'Xalqaro kompaniyalarda HR boshqaruv modellari',
    bio: "Merit Chemicals kompaniyasining CHRO lavozimida ishlaydi. Xalqaro HR standartlarni mahalliy bozorda qo'llash bo'yicha keng tajribaga ega.",
    social: { linkedin: '#', website: '#' }
  },
  {
    name: 'Asrorjon Azimov',
    role: 'HRD, Biznesni Rivojlantirish Banki',
    img: 'https://i.pravatar.cc/500?img=51',
    topic: 'Xodimlar rivojlanishi va performance management',
    bio: "Biznesni Rivojlantirish Bankida HR yo'nalishini boshqaradi. Xodimlarni baholash, rivojlantirish va motivatsiya tizimlarini joriy etishda tajribali.",
    social: { linkedin: '#', website: '#' }
  },
  {
    name: 'Saule Sadullaeva',
    role: 'HRD, UzTMK AJ',
    img: 'https://i.pravatar.cc/500?img=47',
    topic: 'Korporativ madaniyat va xodimlar ehtiyojlari',
    bio: "UzTMK AJ da xodimlar boshqaruvi va korporativ madaniyat shakllantirishda yetakchilik qiladi. Gender tenglik va inkluzivlik bo'yicha faol.",
    social: { linkedin: '#', website: '#' }
  },
  {
    name: 'Avazbek Orzimatov',
    role: 'HR Transformatsiya arxitektori & "Oddiy Consult" asoschisi',
    img: 'https://i.pravatar.cc/500?img=11',
    topic: 'HR tizimlarni noldan qurish strategiyasi',
    bio: "10+ yillik HR sohasidagi tajriba. O'zbekistondagi yetakchi kompaniyalarga HR transformatsiya loyihalarini amalga oshirishda yordam bergan. \"Oddiy Consult\" konsalting kompaniyasi asoschisi.",
    social: { linkedin: '#', website: '#' }
  }
];

export default function Speakers() {
  const [selected, setSelected] = useState(null);

  const closeModal = useCallback(() => setSelected(null), []);

  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && closeModal();
    if (selected) {
      document.addEventListener('keydown', handler);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [selected, closeModal]);

  return (
    <section id="speakers" className={styles.speakers}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>SPIKERLAR</h2>
        </motion.div>

        <div className={styles.grid}>
          {speakers.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={styles.card}
              onClick={() => setSelected(s)}
            >
              <div className={styles.imageWrapper}>
                <img src={s.img} alt={s.name} className={styles.image} />
                <div className={styles.overlay}>
                  <div className={styles.info}>
                    <h3 className={styles.name}>{s.name}</h3>
                    <p className={styles.role}>{s.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.modalClose} onClick={closeModal}>
                <X size={24} />
              </button>
              <div className={styles.modalGrid}>
                <div className={styles.modalImageWrapper}>
                  <img src={selected.img} alt={selected.name} className={styles.modalImage} />
                </div>
                <div className={styles.modalInfo}>
                  <h3 className={styles.modalName}>{selected.name}</h3>
                  <p className={styles.modalRole}>{selected.role}</p>
                  <div className={styles.modalTopic}>
                    <span>Mavzu:</span> {selected.topic}
                  </div>
                  <p className={styles.modalBio}>{selected.bio}</p>
                  <div className={styles.modalSocial}>
                    {selected.social?.linkedin && (
                      <a href={selected.social.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <ExternalLink size={20} /> LinkedIn
                      </a>
                    )}
                    {selected.social?.website && (
                      <a href={selected.social.website} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <Globe size={20} /> Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
