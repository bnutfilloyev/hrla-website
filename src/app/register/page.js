'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './register.module.css';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', phone: '', company: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setTimeout(() => router.push('/'), 3000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.header}>
          <img src="/hrla-green-logo.png" alt="HRLA" className={styles.logo} />
          <p className={styles.date}>26-aprel, 2026 · Toshkent</p>
        </div>

        {status === 'success' ? (
          <div className={styles.success}>
            <div className={styles.successIcon}>✓</div>
            <h2>Muvaffaqiyatli!</h2>
            <p>Soʻrovingiz qabul qilindi. Operatorlar tez orada siz bilan bogʻlanishadi.</p>
            <p className={styles.redirect}>Asosiy sahifaga yoʻnaltirilmoqda...</p>
          </div>
        ) : (
          <>
            <div className={styles.titleBlock}>
              <h1 className={styles.title}>ROʻYXATDAN OʻTISH</h1>
              <p className={styles.subtitle}>Joylar soni cheklangan. Hoziroq chiptani band qiling!</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Ism va Familiya</label>
                <input
                  type="text"
                  required
                  className={styles.input}
                  placeholder="Savlat Shodiyev"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Telefon raqam</label>
                <input
                  type="tel"
                  required
                  className={styles.input}
                  placeholder="+998 90 123 45 67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/[^0-9+\s\-()]/g, '') })}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Kompaniya nomi (ixtiyoriy)</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Kompaniyangiz nomini kiriting"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Yuborilmoqda...' : 'BAND QILISH'}
              </button>

              {status === 'error' && (
                <p className={styles.error}>Xatolik yuz berdi. Iltimos qaytadan urinib koʻring.</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
