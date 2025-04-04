import styles from '@/components/Footer/footer.module.css';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.container}>
                <Image
                    className={styles.logo}
                    src="/logo-white.svg"
                    alt="Genius"
                    width={127}
                    height={51}
                    priority
                />
                <div className={styles.menuWrapper}>
                    <div className={styles.menu}>
                        <div className={styles.menuTitle}>Навігація</div>
                        <a href="#" className={styles.menuLink}>Напрямки</a>
                        <a href="#" className={styles.menuLink}>Послуги та ціни</a>
                        <a href="#" className={styles.menuLink}>Спеціалісти</a>
                    </div>
                    <div className={styles.menu}>
                        <div className={styles.menuTitle}>Інформація</div>
                        <a href="#" className={styles.menuLink}>Прайс</a>
                        <a href="#" className={styles.menuLink}>Політика конфіденційності</a>
                        <a href="#" className={styles.menuLink}>Оферта</a>
                        <a href="#" className={styles.menuLink}>Ліцензії</a>
                    </div>
                    <div className={styles.menu}>
                        <div className={styles.menuTitle}>Контакти</div>
                        <a href="tel:380664088106" className={styles.menuLink}>380 (66) 408-81-06</a>
                        <a href="tel:380634088108" className={styles.menuLink}>380 (63) 408-81-08</a>
                        <a href="tel:380673129062" className={styles.menuLink}>380 (67) 312-90-62</a>
                        <a href="mailto:aid@skm.clinic" className={styles.email}>aid@skm.clinic</a>
                    </div>
                    <div className={styles.menu}>
                        <div className={styles.menuTitle}>Адреси</div>
                        <p className={styles.text}>м. Київ, вул. Василя Липківського, 25 (вхід з двору)</p>
                        <p className={styles.text}>м.Київ, вул. Гарматна 38а</p>
                    </div>
                </div>
                <div className={styles.copyrightWrapper}>
                    <div className={styles.copyright}>ТОВ «Вімен Груп» 2021-{new Date().getFullYear()} Всі права захищенні</div>
                </div>
            </div>
        </div>
    )
}