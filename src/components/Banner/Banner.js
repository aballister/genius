import styles from './banner.module.css';
import BannerButton from '@/components/Banner/Button';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.subtitle}>health clinic</div>
                    <h1 className={styles.title}>GENIUS</h1>
                    <div className={styles.slogan}>Ваше здоров&apos;я – наш пріоритет</div>
                    <BannerButton />
                </div>
            </div>
        </div>
    )
}