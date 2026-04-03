'use client';
import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ChevronRight } from 'lucide-react';
import styles from './Speakers.module.css';

const speakers = [
  {
    name: "Gʻolibjon Mirabdullayev",
    role: 'HRD, InfinBank.',
    exp: '10+ yil',
    img: "/speakers/G'olibjon-Mirabdullayev.png",
    topic: 'Xodimlarni boshqarishda kompetensiyaga asoslangan yondashuv',
    bio: "InfinBank HR departamentini boshqaradi. Moliya sektorida xodimlarni boshqarish, korporativ madaniyat va talant jalb qilish boʻyicha ekspert.",
    social: { linkedin: 'https://www.linkedin.com/in/golibjon-mirabdullaev-00936729' }
  },
  {
    name: 'Lazizbek Mamatov',
    role: 'HRD, Artel',
    exp: '20 yil',
    img: '/speakers/Lazizbek-Mamatov.png',
    topic: "HR va Biznes oʻrtasidagi muammolar",
    bio: "Ish tajribasi: Carlsberg, Nokia, CNH Industrial, Artel. Oʻzbekistonning eng yirik ishlab chiqarish kompaniyalaridan birida HR strategiyasini boshqaradi.",
    social: { linkedin: 'https://www.linkedin.com/in/lazizbek-mamatov-13a16720' }
  },
  {
    name: 'Sardor Zunnunov',
    role: 'CHRO - Merit Chemicals | HR Consultant - Uztelecom',
    exp: '10+ yil',
    img: '/speakers/Sardor-Zununov.png',
    topic: "Oʻzbekistonda va chet elda (rivojlangan mamlakatlarda) HR va xodimlar oʻrtasidagi farq",
    bio: "Xalqaro va mahalliy islohotlar, HR standartlarni joriy etish boʻyicha ekspert darajasidagi bilim va tajribaga ega.",
    social: { linkedin: 'https://www.linkedin.com/in/sardorzununov' }
  },
  {
    name: 'Asrorjon Azimov',
    role: 'HRD, CEO HR Laboratories, Agrobank HR transformatsiya rahbari',
    exp: '18 yil',
    img: '/speakers/Asror-Azimov.png',
    topic: "Tarmoqli (Сетевой) kompaniya filiali uchun HR tizimini joriy etish: transformatsiya jarayonida rahbariyat va jamoa oʻrtasidagi oʻzgarishlarni samarali boshqarish",
    bio: "Ish tajribasi: Hamkorbank, UzSQB, Aloqabank, BRB. Xodimlarni baholash, rivojlantirish va motivatsiya tizimlarini joriy etishda chuqur tajribali.",
    social: { linkedin: 'https://www.linkedin.com/in/asrorjon-azimov-12545963' }
  },
  {
    name: 'Saule Sadullaeva',
    role: 'HRD, TMK AJ',
    exp: '20 yil',
    img: '/speakers/Saule-Sadullayeva.png',
    topic: 'HR metrikalari va KPI',
    bio: "Ish tajribasi: Unitel(Beeline), Lukoil, Ipoteka-Bank, Asakabank, Tenge Bank, TMK. Xodimlar boshqaruvi va korporativ madaniyat shakllantirishda yetakchilik qiladi.",
    social: { linkedin: 'https://www.linkedin.com/in/saule-sadullaeva-44a935bb' }
  },
  {
    name: 'Lola Razzoqova',
    role: 'Bisnes-trener, HR Expert, Consultant',
    exp: '20+ yil',
    img: '/speakers/Lola-Razzoqova.jpg',
    topic: "Yangi darajadagi boshqaruv: liderning metakoʻnikmalari",
    bio: "20+ yillik tajribaga ega HR va boshqaruv konsalting mutaxassisi. Rekrutment, baholash, C&B, motivatsiya va HR jarayonlarini avtomatlashtirish boʻyicha ekspert. ICBT akkreditatsiyalangan xalqaro treneri va supervayzori, ICBT/IIMD GmbH, UJC va DISC sertifikatlariga ega. 2013 yildan beri offline, 8 yildan beri digital treninglar oʻtkazib, 5000+ soat tajriba toʻplagan. UNDP, EFCA, GIZ loyihalarida ToT va Soft Skills boʻyicha trener/metodolog sifatida ishtirok etgan. Faoliyati — treninglar, metodikalar, HR tizimlari, avtomatlashtirish va strategik sessiyalar boʻyicha konsalting.",
    social: { linkedin: 'https://www.linkedin.com/in/lola-razzakova-5a7429375/' }
  },
  {
    name: "Avazbek Orzimatov",
    role: 'HR Transformatsiya arxitektori va "Oddiy Consult" asoschisi.',
    exp: '10+ yil',
    img: "/speakers/Avazbek-Orzimatov.png",
    topic: 'HR tizimlarni noldan qurish strategiyasi',
    bio: "10+ yillik HR sohasidagi tajriba. Oʻzbekistondagi yetakchi kompaniyalarga HR transformatsiya loyihalarini amalga oshirishda yordam bergan.",
    social: { linkedin: 'https://www.linkedin.com/in/avazbek-orzimatov-9911ba1b8' }
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
                    <div className={styles.badgeRow}>
                      {s.exp && <span className={styles.expBadge}>{s.exp} tajriba</span>}
                      <div className={styles.detailBadge}>
                        Batafsil <ChevronRight size={16} className={styles.badgeArrow} />
                      </div>
                    </div>
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
                  {selected.exp && <span className={styles.modalExpBadge}>{selected.exp} tajriba</span>}
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
