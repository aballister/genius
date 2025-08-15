"use client"
import styles from './doctors.module.css';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import Doctor from '@/components/Doctors/Doctor/Doctor';
import SliderControls from '@/components/Doctors/SliderControls';

const doctors = [
    {
        name: 'Полієнко Петро', position: 'головний лікар, кардіолог', exp: '7 років', info: 'лікар-кардіолог',
        img: 'polienko.jpg'
    },
    {
        name: 'Акулов Дмитро', position: 'сімейний лікар', exp: '', info: 'лікар-терапевт, лікар-гастроентеролог',
        img: 'akulov.jpg'
    },
    {
        name: 'Михайленко Валентина', position: 'ендокринолог', exp: '', info: 'лікар-терапевт, лікар-ендокринолог',
        img: 'mykhailenko.jpg'
    },
    {
        name: 'Савицька Аліна', position: 'кардіолог, дерматолог', exp: '', info: 'лікар-кардіолог, лікар-дерматолог',
        img: 'savytska.jpg'
    },
    {
        name: 'Мельник Лідія', position: 'невролог', exp: '', info: 'лікар-невролог',
        img: 'melnyk.jpg'
    },
    {
        name: 'Ферас Ель-Заммар', position: 'ортопед-травматолог', exp: '', info: 'спеціалізується на лікуванні та реабілітації після травм та захворювань опорно-рухового апарату',
        img: 'feras.jpg'
    },
    {
        name: 'Дідок Людмила', position: 'терапевт, лікар з ультразвукової діагностики', exp: 'понад 5 років', info: '• Консультації дорослих (від 18 років): діагностика, профілактика та лікування гострих і хронічних внутрішніх захворювань\n• УЗД: органів черевної порожнини, нирок, щитоподібної залози, молочних залоз, органів малого тазу\n• Укладання декларацій з пацієнтами',
        img: 'didok.jpg'
    },
    {
        name: 'Василишин Ярослав', position: 'отоларинголог', exp: '', info: '',
        img: 'vasylyshyn.jpg'
    },
    {
        name: 'Марданов Ренат', position: 'акушер-гінеколог', exp: '', info: '',
        img: 'mardanov.jpg'
    },
    {
        name: 'Білоус Інна', position: 'косметолог', exp: '10 років', info: 'ботулінотерапія, контурна пластика обличчя, аугментація губ, плазмотерапія, мезотерапія, корекція вікових змін',
        img: 'bilous.jpg'
    },
    {
        name: 'Дубиківська Інна', position: 'медична сестра', exp: '', info: '',
        img: 'dubykivska.jpg'
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
            '(max-width: 1250px)': {
                slides: {
                    perView: 1,
                    spacing: 10,
                },
            },
        },
    });

    return (
        <div className={styles.doctors} id='doctors'>
            <div className={styles.container}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.title}>Наші спеціалісти</h2>
                    <h3 className={styles.subtitle}>Наші лікарі – це професіонали з багаторічним досвідом, які постійно підвищують свою кваліфікацію.</h3>
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
                        doctors.map((doctor, index) => (
                            <Doctor item={doctor} key={index} />
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
            </div>
        </div>
    )
}