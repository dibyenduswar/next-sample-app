'use client';

import { redirect } from 'next/navigation';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './page.module.css'; // Adjust the path as needed

async function fetchTeam(id) {
    const url = `https://fake-json-api.mock.beeceptor.com/users/${id}`;
    const res = await fetch(url);
    if (!res.ok) return undefined;
    return res.json();
}

export default async function Profile({ params }) {
    const router = useRouter();
    const team = await fetchTeam(params.id);
    
    // If the team data is not found, redirect to the login page
    if (!team) {
        redirect('/login');
    }

    return (
        <div className={styles.container}>
            <button
                type="button"
                onClick={() => router.push('/teams')}
                className={styles.button}
                aria-label="Go to Teams"
            >
                Teams
            </button>

            <h1>{team.name}</h1>
            <Image
                src={team.photo}
                alt={team.name}
                width={50}
                height={50}
                className={styles.image}
            />
            <div className={styles.details}>
                <p><strong>Company:</strong> {team.company}</p>
                <p><strong>Username:</strong> {team.username}</p>
                <p><strong>Email:</strong> {team.email}</p>
                <p><strong>Address:</strong> {team.address}</p>
                <p><strong>ZIP Code:</strong> {team.zip}</p>
                <p><strong>State:</strong> {team.state}</p>
                <p><strong>Country:</strong> {team.country}</p>
                <p><strong>Phone:</strong> {team.phone}</p>
            </div>
        </div>
    );
}
