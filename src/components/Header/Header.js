import styles from './header.module.css';
import Image from 'next/image';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <Image
                    className={styles.logo}
                    src="/logo.svg"
                    alt="Genius"
                    width={127}
                    height={51}
                    priority
                />
                <div className={styles.headerRight}>
                    <div className={styles.menu}>
                        <a className={styles.menuItem} href="#">Послуги</a>
                        <a className={styles.menuItem} href="#">Напрямки</a>
                        <a className={styles.menuItem} href="#">Спеціалісти</a>
                        <a className={styles.menuItem} href="#">Ціни</a>
                        <a className={styles.menuItem} href="#">Контакти</a>
                    </div>
                    <div className={styles.phones}>
                        <div className={styles.phonesContainer}>
                        <Image
                            className={styles.phoneIcon}
                            src="/phone-icon.svg"
                            alt="phone"
                            width={20}
                            height={20}
                            priority
                        />
                        <div className={styles.phonesWrapper}>
                            <a className={styles.phoneItem} href="tel:380664088106">380 (66) 408-81-06</a>
                            <a className={styles.phoneItem} href="tel:380634088108">380 (63) 408-81-08</a>
                            <a className={styles.phoneItem} href="tel:380673129062">380 (67) 312-90-62</a>
                        </div>
                        <Image
                            className={styles.dropdownIcon}
                            src="/dropdown-icon.svg"
                            alt="arrow"
                            width={11}
                            height={7}
                            priority
                        />
                        </div>
                    </div>
                    <button className={styles.button}>Запис онлайн</button>
                </div>
            </div>
        </div>
    )
}