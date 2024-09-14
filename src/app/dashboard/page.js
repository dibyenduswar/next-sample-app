'use client';

import { useRouter } from 'next/navigation';
import styles from './page.module.css'; // Ensure you create this CSS module file

export default function Page() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        type="button"
        onClick={() => router.push('/')}
        className={styles.button}
        aria-label="Go to Home Page"
      >
        Home
      </button>
      <button
        type="button"
        onClick={() => router.push('/teams')}
        className={styles.button}
        aria-label="Go to Team Page"
      >
        Teams
      </button>
    </div>
  );
}
