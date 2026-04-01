'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Dilshod Xudoyberdiyev',
    role: 'HR Menejer',
    company: 'Uzum',
    avatar: 'https://i.pravatar.cc/200?img=12',
    text: "Konferensiya menga HR sohasidagi eng so'nggi trendlarni o'rganish va boshqa mutaxassislar bilan tajriba almashish imkonini berdi. Ayniqsa, spikerlarning amaliy maslahatlari juda foydali bo'ldi.",
  },
  {
    name: 'Nilufar Karimova',
    role: 'Talent Acquisition Lead',
    company: 'Payme',
    avatar: 'https://i.pravatar.cc/200?img=5',
    text: "HRLA — bu nafaqat bilim olish, balki sohada yangi kontaktlar orttirish uchun ajoyib platforma. Har bir tadbir yuqori darajada tashkil etilgan.",
  },
  {
    name: 'Jasur Abdullayev',
    role: 'CEO',
    company: 'TechStart',
    avatar: 'https://i.pravatar.cc/200?img=33',
    text: "Biznes egasi sifatida HR bo'limini qanday samarali boshqarish kerakligini tushinib oldim. Konferensiya amaliy va natijaga yo'naltirilgan edi.",
  },
  {
    name: 'Madina Rashidova',
    role: 'HR Business Partner',
    company: 'Hamkorbank',
    avatar: 'https://i.pravatar.cc/200?img=9',
    text: "Spikerlar tanlovi juda yaxshi bo'lgan — har biri o'z sohasining yetuk mutaxassisi. Konferensiyadan keyin jamoamizda bir nechta yangi amaliyotlarni joriy etdik.",
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
                    <p className={styles.authorRole}>{t.role}, {t.company}</p>
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
