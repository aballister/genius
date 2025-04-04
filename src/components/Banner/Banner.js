import styles from './banner.module.css';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.subtitle}>health clinic</div>
                    <h1 className={styles.title}>GENIUS</h1>
                    <div className={styles.slogan}>Ваше здоров'я – наш пріоритет</div>
                    <button className={styles.button}>Записатись на прийом</button>
                </div>
            </div>
        </div>
    )
}