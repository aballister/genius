"use client"
import styles from './reviews.module.css';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import { setModalAction } from '@/store/slices/uiSlice';
import { useDispatch } from 'react-redux';
import SliderControls from '@/components/Reviews/SliderControls';

const reviews = [
    {id: 1, date: '10.09.2024', author: 'Марина, 35 років', text: '«Відвідую клініку вже кілька років і кожного разу переконуюсь у професіоналізмі лікарів. Особливо вдячна кардіологу за індивідуальний підхід та уважність. Всі обстеження провели швидко та якісно. Дякую всім співробітникам!»'},
    {id: 2, date: '30.08.2024', author: 'Олександр, 42 років', text: '«Звертався до травматолога після серйозної травми. Лікування та реабілітація пройшли на високому рівні. Дуже вдячний за швидке відновлення! Рекомендую клініку всім своїм знайомим».'},
    {id: 3, date: '24.08.2024', author: 'Ігор, 50 років', text: '«Клініка справила на мене приємне враження. Був на прийомі у уролога та невролога. Окрім професійного підходу, відчувається турбота про пацієнта. Дуже зручно, що всі необхідні процедури можна пройти в одному місці».'},
    {id: 4, date: '10.09.2024', author: 'Марина, 35 років', text: '«Відвідую клініку вже кілька років і кожного разу переконуюсь у професіоналізмі лікарів. Особливо вдячна кардіологу за індивідуальний підхід та уважність. Всі обстеження провели швидко та якісно. Дякую всім співробітникам!»'},
    {id: 5, date: '30.08.2024', author: 'Олександр, 42 років', text: '«Звертався до травматолога після серйозної травми. Лікування та реабілітація пройшли на високому рівні. Дуже вдячний за швидке відновлення! Рекомендую клініку всім своїм знайомим».'},
    {id: 6, date: '24.08.2024', author: 'Ігор, 50 років', text: '«Клініка справила на мене приємне враження. Був на прийомі у уролога та невролога. Окрім професійного підходу, відчувається турбота про пацієнта. Дуже зручно, що всі необхідні процедури можна пройти в одному місці».'},
]

export default function Reviews() {
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        created() {
            setLoaded(true)
        },
        slides: {
            perView: 4,
            spacing: 0,
        },
        loop: true,
        breakpoints: {
            '(max-width: 1250px)': {
                slides: {
                    perView: 1,
                    spacing: 0,
                },
            },
        },
    });

    return (
        <div className={styles.reviews}>
            <div className={styles.container}>
                <div className={styles.rect} />
                <div className={styles.titleWrapper}>
                    <h2 className={styles.title}>Про нас говорять</h2>
                    <h3 className={styles.subtitle}>98% наших клієнтів рекомендують нас своїм рідним та знайомим</h3>
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
                    {
                        reviews.map(review => (
                            <div className='keen-slider__slide' key={review.id}>
                                <div className={styles.sliderItem}>
                                    <p className={styles.reviewsText}>{review.text}</p>
                                    <div className={styles.reviewsInfo}>
                                        <p className={styles.reviewsAuthor}>{review.author}</p>
                                        <p className={styles.reviewsDate}>{review.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {
                    loaded &&
                    instanceRef.current &&
                    <div className={styles.mobileControls}>
                        <SliderControls instanceRef={instanceRef}/>
                    </div>
                }
                <button className={styles.button} onClick={() => dispatch(setModalAction('Залишити відгук'))}>ЗАЛИШИТИ ВІДГУК</button>
            </div>
        </div>
    )
}