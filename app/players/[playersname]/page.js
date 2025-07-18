'use client';

import { players } from '@/components/players';

export default function PlayerDetails({ params }) {
  const { playersname } = params; 
  const player = players.find(p => p.slug === playersname);

  if (!player) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>Player Not Found</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>{player.name}</h1>
      <img
        src={player.image}
        alt={player.name}
        style={{ width: 300, borderRadius: '10px', marginBottom: '1rem' }}
      />
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: 'auto' }}>
        {player.description}
      </p>
    </div>
  );
}
