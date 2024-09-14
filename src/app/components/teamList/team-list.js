'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './team-list.module.css'; // Create this CSS module file for styling

export default function TeamList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function fetchTeams() {
      const res = await fetch('https://fake-json-api.mock.beeceptor.com/users');
      if (res.ok) {
        const data = await res.json();
        setTeams(data);
      }
    }

    fetchTeams();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Team Members</h1>
      <ul className={styles.teamList}>
        {teams.map(team => (
          <li key={team.id} className={styles.teamItem}>
            <Link href={`/team/${team.id}`} className={styles.teamLink}>
              <div className={styles.teamContent}>
                <Image
                  src={team.photo}
                  alt={team.name}
                  width={50}
                  height={50}
                  className={styles.teamImage}
                />
                <div className={styles.teamDetails}>
                  <h4 className={styles.teamName}>{team.name}</h4>
                  <p className={styles.teamCompany}>{team.company}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
