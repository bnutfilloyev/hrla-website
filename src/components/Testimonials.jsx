'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Farangiz Bazarova',
    role: 'HR Specialist',
    company: '',
    avatar: 'https://i.pravatar.cc/200?img=5',
    text: "26-aprel kuni boʻlib oʻtadigan HR konferensiyasiga borishni albatta maslahat beraman. Men ham qatnashmoqchiman — mavzular juda qiziqarli, spikerlar esa oʻz sohasining ustalari. Har bir HR mutaxassis uchun foydali boʻladi, deb oʻylayman.",
  },
  {
    name: 'Marjona Xayrullayeva',
    role: 'HR Manager',
    company: 'Orient Logistics Group',
    avatar: 'https://i.pravatar.cc/200?img=9',
    text: "Shaxsan oʻzim 26-apreldagi konferensiyada ishtirok etishni rejalashtirdim va boshqalarga ham tavsiya qilaman. Tadbir HR tizimini takomillashtirish, zamonaviy yondashuvlar va transformatsiya boʻyicha juda koʻp amaliy bilim beradi.",
  },
  {
    name: 'Xoliqjonov MuhammadYusuf',
    role: 'Rekruter',
    company: '',
    avatar: 'https://i.pravatar.cc/200?img=33',
    text: "26-aprel konferensiyasi HR sohasida ishlaydiganlar uchun juda yaxshi imkoniyat — qatnashishni chin dildan tavsiya qilaman. Men ham boraman, chunki yangi gʻoyalar, professional tanishuvlar va real tajribalar har doim foyda keltiradi.",
  },
];

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
};

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = useCallback((dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  const t = testimonials[index];

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.title}>QATNASHCHILAR <span className={styles.highlight}>FIKRLARI</span></h2>
        </motion.div>

        <div className={styles.carouselWrapper}>
          <button className={styles.arrow} onClick={() => paginate(-1)} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>

          <div className={styles.cardContainer}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className={styles.card}
              >
                <Quote className={styles.quoteIcon} size={40} />
                <p className={styles.text}>{t.text}</p>
                <div className={styles.author}>
                  <img src={t.avatar} alt={t.name} className={styles.avatar} />
                  <div>
                    <h4 className={styles.authorName}>{t.name}</h4>
                    <p className={styles.authorRole}>{t.role}{t.company ? `, ${t.company}` : ''}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className={styles.arrow} onClick={() => paginate(1)} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
