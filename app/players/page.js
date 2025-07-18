'use client';

import Link from 'next/link';
import { players } from '@/components/players';
import styles from '@/components/blog.module.css'; 

export default function PlayerList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Thala Dhoni 07</h1>
      <div className={styles.grid}>
        {players.map(player => (
          <div key={player.name} className={styles.card}>
            <img src={player.image} alt={player.name} className={styles.playerImage} />
            <h3 className={styles.playerName}>{player.name}</h3>
            
            <Link href={`/players/${player.slug}`}>
              <button className={styles.button}>Explore Me</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
