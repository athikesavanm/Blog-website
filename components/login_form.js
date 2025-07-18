'use client';

import { useState } from 'react';
import styles from './login_form.module.css'; 

export default function LoginForm({ title = 'Login', onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('user_email', email);
    localStorage.setItem('user_password', password);

    console.log('Stored in localStorage:', email, password);

    if (onSubmit) {
      onSubmit({ email, password });
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{title}</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
}
