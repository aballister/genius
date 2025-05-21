"use client"
import styles from './specials.module.css';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import SliderControls from '@/components/Specials/SliderControls';

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
            '(max-width: 1250px)': {
                slides: {
                    perView: 1,
                    spacing: 10,
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
                        <SliderControls instanceRef={instanceRef}/>
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
                                здоров&apos;я та бажає отримати всебічну діагностику.</p>
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
                        <p className={styles.specialsText}>Пройдіть УЗД будь-якого органу зі знижкою 30%. Точна та швидка діагностика – це перший крок до збереження вашого здоров&apos;я. Скористайтеся цією пропозицією вже сьогодні!</p>
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
                                отримайте знижку 10% на всі послуги. Піклуйтеся про здоров&apos;я своїх рідних разом із
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
                                отримайте знижку 10% на всі послуги. Піклуйтеся про здоров&apos;я своїх рідних разом із
                                нами!</p>
                        </div>
                    </div>
                </div>
                {
                    loaded &&
                    instanceRef.current &&
                    <div className={styles.mobileControls}>
                        <SliderControls instanceRef={instanceRef}/>
                    </div>
                }
            </div>
        </div>
    )
}