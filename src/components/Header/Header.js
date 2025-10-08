'use client'
import styles from './header.module.css';
import Image from 'next/image';
import { setModalAction } from '@/store/slices/uiSlice';
import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';

export default function Header() {
    const dispatch = useDispatch();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const modalHandler = () => {
        dispatch(setModalAction('Запис онлайн'))
    }

    const menuHandler = useCallback(() => {
        setIsMenuOpen(state => !state);
    }, [])

    const goTopHandler = useCallback((e, id) => {
        e.preventDefault();
        setIsMenuOpen(false);
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
    },[])

    return (
        <>
            {/*<div className={styles.banner}>*/}
            {/*    Вакцинуємо від грипу!*/}
            {/*</div>*/}
            <div className={styles.header}>
                <div className={styles.container}>
                    <button className={styles.hamburger} onClick={menuHandler}>
                        <div className={styles.ham1}></div>
                        <div className={styles.ham2}></div>
                        <div className={styles.ham3}></div>
                    </button>
                    <Image
                        className={styles.logo}
                        src="/logo.svg"
                        alt="Genius"
                        width={127}
                        height={51}
                        priority
                    />
                    <div className={styles.headerRight}>
                        <div className={`${styles.menu} ${isMenuOpen ? `${styles.menuOpened}` : ''}`}>
                            <button className={styles.button} onClick={menuHandler}>
                                <Image
                                    className={styles.close}
                                    src="/close.svg"
                                    alt="close"
                                    width={24}
                                    height={24}
                                    priority
                                />
                            </button>
                            <a className={styles.menuItem} onClick={(e) => {goTopHandler(e, 'branches')}}>Послуги</a>
                            <a className={styles.menuItem} onClick={(e) => {goTopHandler(e, 'branches')}}>Напрямки</a>
                            <a className={styles.menuItem} onClick={(e) => {goTopHandler(e, 'doctors')}}>Спеціалісти</a>
                            <a className={styles.menuItem} onClick={(e) => {goTopHandler(e, 'prices')}}>Ціни</a>
                            <a className={styles.menuItem} onClick={(e) => {goTopHandler(e, 'contacts')}}>Контакти</a>
                            <div className={styles.menuPhones}>
                                <a className={styles.menuPhoneItem} href="tel:380664088106">380 (66) 408-81-06</a>
                                <a className={styles.menuPhoneItem} href="tel:380634088108">380 (63) 408-81-08</a>
                                <a className={styles.menuPhoneItem} href="tel:380673129062">380 (67) 312-90-62</a>
                            </div>
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
                        <button className={styles.button} onClick={modalHandler}>Запис онлайн</button>
                    </div>
                </div>
            </div>
        </>
    )
}