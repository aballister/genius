import styles from './banner.module.css';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.container}>
            <img src="/banner.jpg" className={styles.web} alt=""/>
            <img src="/banner_mobile.jpg" className={styles.mobile} alt=""/>
            </div>
        </div>
    )
}