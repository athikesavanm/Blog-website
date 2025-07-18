'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from '@/components/dashboard.module.css';

export default function DhoniDashboard() {
  const [isClient, setIsClient] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // marks client ready

    if (localStorage.getItem('isAdmin') !== 'true') {
      window.location.href = '/admin_login';
    }
  }, []);

  const handleAddEntry = () => {
    if (!name || !image || !description) {
      alert('Please fill all fields!');
      return;
    }

    const dhoniData = JSON.parse(localStorage.getItem('dhoniData') || '[]');
    dhoniData.push({ name, image, description });
    localStorage.setItem('dhoniData', JSON.stringify(dhoniData));

    setName('');
    setImage('');
    setDescription('');
    setMessage('Image entry added successfully!');
  };

  const goToGallery = () => {
  router.push('/players'); // This matches your folder: app/players/page.js
};

  // Prevent rendering on server
  if (!isClient) return null;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dhoni Blog Dashboard</h1>
      <p className={styles.subtitle}>Add a new Dhoni image entry</p>

      <div className={styles.formGroup}>
        <input
          placeholder="Image Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
        <input
          placeholder="Image Path (e.g. /dhoni1.webp)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className={styles.input}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles.textarea}
        />
      </div>

      <div className={styles.buttonGroup}>
        <button onClick={handleAddEntry} className={styles.button}>
          Add Dhoni Image
        </button>
        <button onClick={goToGallery} className={styles.button}>
          View Gallery
        </button>
      </div>

      {message && <div className={styles.message}>{message}</div>}
    </div>
  );
}
