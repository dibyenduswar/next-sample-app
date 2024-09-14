'use client'
 
import { useRouter } from 'next/navigation'
import styles from './globals.css';

export default function Page() {
  const router = useRouter()
 
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Greetings from NEXT</h1>
      <button type="button" onClick={() => router.push('/dashboard')}>
        Dashboard
      </button>
    </div>
  )
}