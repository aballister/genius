"use client"
import styles from './branches.module.css';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useCallback, useState } from 'react';
import SliderControls from '@/components/Branches/SliderControls';

const branches = [
    {icon: 'branch-1', title: 'Сімейна медицина', text: 'Комплексний медичний супровід для всієї родини. Профілактика, діагностика та лікування широкого спектра захворювань.'},
    {icon: 'branch-2', title: 'Кардіологія', text: 'Діагностика та лікування серцево-судинних захворювань. Профілактика серцевих ускладнень та консультації.'},
    {icon: 'branch-3', title: 'Педіатрія', text: 'Медичний супровід для дітей різного віку. Профілактика, лікування захворювань та моніторинг розвитку.'},
    {icon: 'branch-4', title: 'Неврологія', text: 'Комплексний підхід до лікування захворювань нервової системи. Ефективна терапія та діагностика.'},
    {icon: 'branch-5', title: 'Травматологія', text: 'Невідкладна допомога при травмах. Лікування переломів, розтягнень та інших ушкоджень.'},
    {icon: 'branch-14', title: 'Фізіотерапія', text: 'Масаж, фонофорез, електрофорез, ударно-хвильова терапія, магнітотерапія.'},
    {icon: 'branch-7', title: 'Дерматовенерологія', text: 'Лікування та профілактика захворювань шкіри та венеричних хвороб із застосуванням сучасних методів.'},
    // {icon: 'branch-8', title: 'Урологія', text: 'Діагностика та лікування захворювань сечостатевої системи. Сучасні методи терапії.'},
    {icon: 'branch-9', title: 'Гастроентерологія', text: 'Спеціалізована допомога при захворюваннях шлунково-кишкового тракту. Діагностика та індивідуальні схеми лікування.'},
    {icon: 'branch-10', title: 'Отоларингологія', text: 'Лікування захворювань вуха, горла та носа. Профілактика та сучасні методи терапії.'},
    {icon: 'branch-11', title: 'Ендокринологія', text: 'Діагностика та лікування гормональних порушень. Комплексний підхід до захворювань ендокринної системи.'},
    {icon: 'branch-12', title: 'Сестринські маніпуляції', text: 'Професійні медичні процедури та маніпуляції. Високий рівень обслуговування та турбота про кожного пацієнта.'},
    {icon: 'branch-13', title: 'Косметологія', text: 'Ботулінотерапія, контурна пластика обличчя, аугментація губ, плазмотерапія, мезотерапія, корекція вікових змін.'},
]

export default function Branches() {
    const [loaded, setLoaded] = useState(false);
    const [wrapped, setWrapped] = useState(true);
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

    const wrapHandler = useCallback(() => {
        if (wrapped) {
            instanceRef.current.destroy();
            setLoaded(false);
        }
        setWrapped(state => !state);
    }, [wrapped, instanceRef]);

    return (
        <div className={styles.branches} id='branches'>
            <div className={styles.container}>
                <div className={styles.rect} />
                <div className={styles.titleWrapper}>
                    <h2 className={styles.title}>Наші напрямки</h2>
                    {
                        wrapped &&
                        loaded &&
                        instanceRef.current &&
                        <SliderControls instanceRef={instanceRef} />
                    }
                </div>
                {
                    wrapped ?
                        <div
                            className={`keen-slider ${styles.slider}`}
                            ref={sliderRef}
                        >
                            {
                                branches.map(branch => (
                                    <div className='keen-slider__slide' key={branch.icon}>
                                        <div className={styles.sliderItem}>
                                            <img
                                                width={60}
                                                height={60}
                                                alt={branch.title}
                                                src={`/branches/${branch.icon}.svg`}
                                                className={styles.image}
                                            />
                                            <p className={styles.specialsTitle}>{branch.title}</p>
                                            <p className={styles.specialsText}>{branch.text}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div> :
                        <div className={styles.branchList}>
                            {
                                branches.map(branch => (
                                    <div className={styles.sliderItem} key={branch.title}>
                                        <img
                                            width={60}
                                            height={60}
                                            alt={branch.title}
                                            src={`/branches/${branch.icon}.svg`}
                                            className={styles.image}
                                        />
                                        <p className={styles.specialsTitle}>{branch.title}</p>
                                        <p className={styles.specialsText}>{branch.text}</p>
                                    </div>
                                ))
                            }
                        </div>
                }
                {
                    wrapped &&
                    loaded &&
                    instanceRef.current &&
                    <div className={styles.mobileControls}>
                        <SliderControls instanceRef={instanceRef}/>
                    </div>
                }
                <div className={styles.listWrapWrapper}>
                    <button className={styles.listWrap} onClick={wrapHandler}>
                        {
                            wrapped ?
                                'Дивитись всі напрямки (+8)' :
                                'Згорнути'
                        }
                        <svg className={`${styles.listWrapArrow} ${!wrapped && styles.listWrapArrowRotate}`} width="8"
                             height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                className={styles.listWrapArrowPath}
                                d="M3.36074 12.3941C3.556 12.5893 3.87259 12.5893 4.06785 12.3941L7.24983 9.2121C7.44509 9.01684 7.44509 8.70026 7.24983 8.50499C7.05457 8.30973 6.73798 8.30973 6.54272 8.50499L3.71429 11.3334L0.885867 8.50499C0.690605 8.30973 0.374022 8.30973 0.17876 8.50499C-0.016502 8.70026 -0.0165021 9.01684 0.17876 9.2121L3.36074 12.3941ZM3.21429 0.0405273L3.21429 12.0405L4.21429 12.0405L4.21429 0.0405274L3.21429 0.0405273Z"
                                fill="#099582"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}