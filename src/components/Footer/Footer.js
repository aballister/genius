'use client'

import styles from '@/components/Footer/footer.module.css';
import Image from 'next/image';
import { useCallback } from 'react';

export default function Footer() {
    const goTopHandler = useCallback((e, id) => {
        e.preventDefault();
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
    },[])

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
                        <a onClick={(e) => {goTopHandler(e, 'branches')}} className={styles.menuLink}>Напрямки</a>
                        <a onClick={(e) => {goTopHandler(e, 'prices')}} className={styles.menuLink}>Послуги та ціни</a>
                        <a onClick={(e) => {goTopHandler(e, 'doctors')}} className={styles.menuLink}>Спеціалісти</a>
                    </div>
                    <div className={styles.menu}>
                        <div className={styles.menuTitle}>Інформація</div>
                        <a onClick={(e) => {goTopHandler(e, 'prices')}} className={styles.menuLink}>Прайс</a>
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