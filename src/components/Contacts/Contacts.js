"use client"
import styles from './contacts.module.css';
import { useCallback } from 'react';
import { setModalAction } from '@/store/slices/uiSlice';
import { useDispatch } from 'react-redux';
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./Map/Map'), {
    ssr: false,
});

export default function Contacts() {
    const dispatch = useDispatch();

    const goTopHandler = useCallback(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    },[]);

    return (
        <div className={styles.contacts} id='contacts'>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.titleWrapper}>
                        <h2 className={styles.title}>Наші клініки</h2>
                    </div>
                    <div className={styles.addresses}>
                        <div className={styles.address}>
                            <div className={styles.city}>Київ</div>
                            <p className={styles.street}>вул. Василя Липківського, 25 (вхід з двору)</p>
                            <p className={styles.street}>Понеділок-пʼятниця - 08:00-20:00 <br/> Субота - 08:00-20:00 <br/>
                                Неділя - 08:00-20:00</p>
                        </div>
                        <div className={styles.address}>
                            <div className={styles.city}>Київ</div>
                            <p className={styles.street}>м.Київ, вул. Гарматна 38а</p>
                            <p className={styles.street}>Понеділок-пʼятниця - 08:00-20:00 <br/>
                                Субота - 10:00-18:00 <br/>
                                Неділя - вихідний</p>
                        </div>
                        <div className={styles.address}>
                            <div className={styles.city}>Контакти</div>
                            <p className={styles.phone}>380 (66) 408-81-06</p>
                            <p className={styles.phone}>380 (63) 408-81-08</p>
                            <p className={styles.phone}>380 (67) 312-90-62</p>
                            <p className={styles.street}>
                                <a href="mailto:aid@skm.clinic"  className={styles.email}>aid@skm.clinic</a>
                            </p>
                        </div>
                    </div>
                    <button className={styles.button} onClick={() => dispatch(setModalAction('Зворотній зв’язок'))}>ЗВ’ЯЖІТЬСЯ ЗІ МНОЮ</button>
                    <button className={styles.goTopWrap} onClick={goTopHandler}>
                        нагору
                        <svg className={`${styles.goTopWrapArrow} ${styles.goTopWrapArrowRotate}`} width="8"
                             height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                className={styles.goTopWrapArrowPath}
                                d="M3.36074 12.3941C3.556 12.5893 3.87259 12.5893 4.06785 12.3941L7.24983 9.2121C7.44509 9.01684 7.44509 8.70026 7.24983 8.50499C7.05457 8.30973 6.73798 8.30973 6.54272 8.50499L3.71429 11.3334L0.885867 8.50499C0.690605 8.30973 0.374022 8.30973 0.17876 8.50499C-0.016502 8.70026 -0.0165021 9.01684 0.17876 9.2121L3.36074 12.3941ZM3.21429 0.0405273L3.21429 12.0405L4.21429 12.0405L4.21429 0.0405274L3.21429 0.0405273Z"
                                fill="#099582"/>
                        </svg>
                    </button>
                </div>
                <div className={styles.mapWrapper}>
                    <Map />
                </div>
            </div>
        </div>
    )
}