"use client"
import { Snowfall } from 'react-snowfall';
import styles from './winter.module.css';

export default function Winter() {
    return (
        <div className={styles.container}>
            <Snowfall />
        </div>
    );
}