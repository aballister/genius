"use client"
import styles from './doctors.module.css';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import Doctor from '@/components/Doctors/Doctor/Doctor';

const doctors = [
    {
        title: 'Олена Коваленко', position: 'кардіолог', exp: '23 роки', info: 'лікар-кардіолог, лікар функціональної діагностики, лікар першої категорії, кандидат медичних наук',
    },
    {
        title: 'Олена Коваленко', position: 'кардіолог', exp: '23 роки', info: 'лікар-кардіолог, лікар функціональної діагностики, лікар першої категорії, кандидат медичних наук',
    },
    {
        title: 'Олена Коваленко', position: 'кардіолог', exp: '23 роки', info: 'лікар-кардіолог, лікар функціональної діагностики, лікар першої категорії, кандидат медичних наук',
    },
    {
        title: 'Олена Коваленко', position: 'кардіолог', exp: '23 роки', info: 'лікар-кардіолог, лікар функціональної діагностики, лікар першої категорії, кандидат медичних наук',
    },
    {
        title: 'Олена Коваленко', position: 'кардіолог', exp: '23 роки', info: 'лікар-кардіолог, лікар функціональної діагностики, лікар першої категорії, кандидат медичних наук',
    },
    {
        title: 'Олена Коваленко', position: 'кардіолог', exp: '23 роки', info: 'лікар-кардіолог, лікар функціональної діагностики, лікар першої категорії, кандидат медичних наук',
    },
]

export default function Doctors() {
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        created() {
            setLoaded(true)
        },
        slides: {
            perView: 5,
            spacing: 20,
        },
        loop: true,
        breakpoints: {
            '(max-width: 900px)': {
                slides: {
                    perView: 3,
                    spacing: 20,
                },
            },
            '(max-width: 576px)': {
                slides: {
                    perView: 2,
                    spacing: 20,
                },
            },
            '(max-width: 400px)': {
                slides: {
                    perView: 1,
                    spacing: 20,
                },
            },
        },
    });

    return (
        <div className={styles.doctors}>
            <div className={styles.container}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.title}>Наші спеціалісти</h2>
                    <h3 className={styles.subtitle}>Наші лікарі – це професіонали з багаторічним досвідом, які постійно підвищують свою кваліфікацію.</h3>
                    {
                        loaded &&
                        instanceRef.current &&
                            <div className={styles.sliderControls}>
                                <button
                                    className={styles.sliderLeft}
                                    onClick={(e) =>
                                        e.stopPropagation() || instanceRef.current?.prev()
                                    }
                                >
                                    <svg className={styles.arrowLeft} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className={styles.arrowPath}
                                              d="M14.5469 7.18752H1.07815M1.07815 7.18752L7.8125 0.45317M1.07815 7.18752L7.8125 13.9219"
                                              stroke="#099582"/>
                                    </svg>
                                </button>

                                <button
                                    className={styles.sliderRight}
                                    onClick={(e) =>
                                        e.stopPropagation() || instanceRef.current?.next()
                                    }
                                >
                                    <svg className={styles.arrowRight} width="15" height="15" viewBox="0 0 15 15"                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className={styles.arrowPath}
                                              d="M14.5469 7.18752H1.07815M1.07815 7.18752L7.8125 0.45317M1.07815 7.18752L7.8125 13.9219"
                                              stroke="#099582"/>
                                    </svg>
                                </button>
                            </div>
                    }
                </div>
                <div
                    className={`keen-slider ${styles.slider}`}
                    ref={sliderRef}
                >
                    {
                        doctors.map((doctor, index) => (
                            <Doctor item={doctor} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}