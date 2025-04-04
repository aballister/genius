"use client"
import styles from './specials.module.css';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';

export default function Specials() {
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        created() {
            setLoaded(true)
        },
        slides: {
            perView: 3,
            spacing: 10,
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
        <div className={styles.specials}>
            <div className={styles.container}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.title}>Акції та спеціальні пропозиції</h2>
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
                    <div className='keen-slider__slide'>
                        <div className={styles.sliderItem}>
                            <img
                                alt='Акція'
                                src='/special-1.png'
                                className={styles.image}
                            />
                            <div className={styles.specialsInfo}>
                                <div className={styles.specialsType}>Обстеження</div>
                                <div className={styles.specialsDate}>діє до 21.09</div>
                            </div>
                            <p className={styles.specialsTitle}>Повний медичний чекап зі знижкою 20%</p>
                            <p className={styles.specialsText}>Пройдіть комплексне обстеження організму з урахуванням
                                індивідуальних особливостей. Ми надаємо знижку на чекап-програми для тих, хто дбає про своє
                                здоров'я та бажає отримати всебічну діагностику.</p>
                        </div>
                    </div>
                    <div className='keen-slider__slide'>
                        <div className={styles.sliderItem}>
                        <img
                            alt='Акція'
                            src='/special-2.png'
                            className={styles.image}
                        />
                        <div className={styles.specialsInfo}>
                            <div className={styles.specialsType}>Обстеження</div>
                            <div className={styles.specialsDate}>діє до 21.09</div>
                        </div>
                        <p className={styles.specialsTitle}>-30% на ультразвукову діагностику (УЗД)</p>
                        <p className={styles.specialsText}>Пройдіть УЗД будь-якого органу зі знижкою 30%. Точна та швидка діагностика – це перший крок до збереження вашого здоров'я. Скористайтеся цією пропозицією вже сьогодні!</p>
                    </div>
                    </div>
                    <div className='keen-slider__slide'>
                        <div className={styles.sliderItem}>
                            <img
                                alt='Акція'
                                src='/special-3.png'
                                className={styles.image}
                            />
                            <div className={styles.specialsInfo}>
                                <div className={styles.specialsType}>Обстеження</div>
                                <div className={styles.specialsDate}>діє до 21.09</div>
                            </div>
                            <p className={styles.specialsTitle}>Сімейні акції: 10% знижки для всієї родини</p>
                            <p className={styles.specialsText}>Зробіть профілактичні огляди для всієї родини та
                                отримайте знижку 10% на всі послуги. Піклуйтеся про здоров'я своїх рідних разом із
                                нами!</p>
                        </div>
                    </div>
                    <div className='keen-slider__slide'>
                        <div className={styles.sliderItem}>
                            <img
                                alt='Акція'
                                src='/special-3.png'
                                className={styles.image}
                            />
                            <div className={styles.specialsInfo}>
                                <div className={styles.specialsType}>Обстеження</div>
                                <div className={styles.specialsDate}>діє до 21.09</div>
                            </div>
                            <p className={styles.specialsTitle}>Сімейні акції: 10% знижки для всієї родини</p>
                            <p className={styles.specialsText}>Зробіть профілактичні огляди для всієї родини та
                                отримайте знижку 10% на всі послуги. Піклуйтеся про здоров'я своїх рідних разом із
                                нами!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}