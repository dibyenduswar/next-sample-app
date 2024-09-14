'use client';

import TeamList from '@/app/components/teamList/team-list'; // Adjust the path as needed
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function Page() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div>
                <button
                    type="button"
                    onClick={() => router.push('/dashboard')}
                    className={styles.button}
                    aria-label="Go to dashboard"
                >
                    Dashboard
                </button>
            </div>
            <div>
                <TeamList />
            </div>
        </div>
    );
}
