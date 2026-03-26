'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: "Konferensiyada kimlar qatnashishi mumkin?",
    a: "Ushbu tadbir asosan kompaniya rahbarlari, HR direktorlar, jamoa yetakchilari va biznes egalari uchun mo'ljallangan. Agar siz xodimlar bilan ishlash tizimlarini rivojlantirmoqchi bo'lsangiz, bu joy aynan siz uchun."
  },
  {
    q: "Chiptani qanday xarid qilishim mumkin?",
    a: "Yuqoridagi yoki pastdagi ro'yxatdan o'tish formasiga ism, telefon va kompaniyangiz nomini qoldiring. Operatorlarimiz siz bilan tez orada bog'lanib, to'lov jarayonini tushuntiradilar."
  },
  {
    q: "Korporativ tarzda qatnashsak chegirma bormi?",
    a: "Ha, kompaniyadan 3 kishi va undan ortiq xodim bilan qatnashsangiz maxsus korporativ tarif (15% dan 25% gacha chegirma) amal qiladi. Operatorga murojaat qiling."
  },
  {
    q: "Sertifikat va taqdimot materiallari beriladimi?",
    a: "Albatta. Formatdan (VIP yoki Standard) qat'iy nazar barcha ishtirokchilarga rasmiy sertifikat va spikerlarning barcha PDF/Video taqdimot materiallari elektron shaklda taqdim etiladi."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faqSec}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>KO'P BERILADIGAN <span className={styles.highlight}>SAVOLLAR</span></h2>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${styles.faqItem} ${openIndex === i ? styles.open : ''}`}
              onClick={() => toggleFAQ(i)}
            >
              <div className={styles.questionBlock}>
                <h3 className={styles.question}>{faq.q}</h3>
                <div className={styles.icon}>
                  <ChevronDown className={styles.chevron} />
                </div>
              </div>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.answerWrapper}
                  >
                    <p className={styles.answer}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
