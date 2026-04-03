'use client';
import { useState } from 'react';
import styles from './Registration.module.css';

export default function Registration() {
  const [formData, setFormData] = useState({ name: '', phone: '', company: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', company: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="registration" className={styles.registration}>
      <div className={styles.container}>
        <div className={styles.formWrapper}>

          <div className={styles.infoCol}>
            <h2 className={styles.title}>ROʻYXATDAN<br />OʻTISH</h2>
            <p className={styles.subtitle}>
              Joylar soni cheklangan. Hoziroq chiptani band qiling!
            </p>
          </div>

          <div className={styles.formCol}>
            {status === 'success' ? (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>✓</div>
                <h3>Muvaffaqiyatli!</h3>
                <p>Sizning soʻrovingiz qabul qilindi. Operatorlar tez orada ma'lumotni tasdiqlash uchun aloqaga chiqishadi.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name" className={styles.label}>Ism va Familiya</label>
                    <input
                      id="name"
                      type="text"
                      required
                      className={styles.input}
                      placeholder="Savlat Shodiyev"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="phone" className={styles.label}>Telefon raqam</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      className={styles.input}
                      placeholder="+998 90 123 45 67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/[^0-9+\s\-()]/g, '') })}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="company" className={styles.label}>Tashkilot nomi / Kompaniya</label>
                  <input
                    id="company"
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
                  <p className={styles.errorMessage}>Xatolik yuz berdi. Iltimos qaytadan urinib koʻring.</p>
                )}
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
