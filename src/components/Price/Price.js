"use client"
import styles from './price.module.css';
import PriceItem from '@/components/Price/PriceItem/PriceItem';

const price = [
    {
        icon: 'price-1', title: 'Виклик лікаря на дім або офіс', text: 'м. Київ та Київська обл. (30 км)',
        list: [
            {title: 'Виклик кардіолога додому', price: 1800},
            {title: 'Виклик кардіолога у вечірній час, вихідні та святкові дні', price: 2400},
            {title: 'Виклик терапевта в офіс на 1 годину', price: 1400},
            {title: 'Виклик терапевта додому до хворого на COVID-19', price: 1200},
            {title: 'Виклик педіатра', price: 1200},
            {title: 'Виклик терапевта', price: 1200},
            {title: 'Виїзд лікаря в Київську обл. оплачується додатково в залежності від населеного пункту'},
        ]
    },
    {
        icon: 'price-2', title: 'Телемедицина (онлайн)', text: 'Консультація по телефону чи в месенджерах',
        offer: 'Знижки до 50%!', offerValue: '0.5',
        list: [
            {title: 'Консультація терапевта', price: 350, fixedPrice: true,},
            {title: 'Консультація гастроентеролога', price: 600},
            {title: 'Консультація педіатра', price: 600},
            {title: 'Консультація неонатолога', price: 600},
            {title: 'Консультація дерматолога', price: 600},
            {title: 'Консультація кардіолога', price: 600},
            {title: 'Консультація ЛОРа', price: 600},
            {title: 'Консультація невропатолога', price: 600},
            {title: 'Консультація уролога', price: 600},
            {title: 'Консультація ортопеда-травматолога', price: 700, fixedPrice: true,},
            {title: 'Консультація гінеколога', price: 600},
            {title: 'Консультація психолога', price: 700, fixedPrice: true,},
            {title: 'Консультація ендокринолога', price: 600},
        ]
    },
    {
        icon: 'price-3', title: 'Консультація (очна)', text: 'Консультація в клініці',
        list: [
            {title: 'Консультація сімейного лікаря', price: 600},
            {title: 'Консультація гастроентеролога', price: 600},
            {title: 'Консультація ендокринолога', price: 600},
            {title: 'Консультація педіатра', price: 600},
            {title: 'Консультація ортопеда-травматолога', price: 700},
            {title: 'Консультація кардіолога', price: 600},
            {title: 'Консультація невропатолога (дитячий/дорослий)', price: 600},
            {title: 'Консультація косметолога', price: 300},
            {title: 'Консультація дерматолога', price: 600},
            {title: 'Консультація психолога', price: 1200},
        ]
    },
    {
        icon: 'price-4', title: 'Лабораторні дослідження', text: 'Лабораторні дослідження (швидкі)',
        list: [
            {title: 'Коронавірус SARS-CoV-2 (COVID19) + Тест на антиген грипу А+В (швидкий)', price: 960},
            {title: 'Коронавірус SARS-CoV-2 (COVID19) (швидкий)', price: 720},
            {title: 'Тест на антиген грипу А+В (швидкий)', price: 960},
        ]
    },
    {
        icon: 'price-5', title: 'Фізіотерапія', text: 'Масаж, фонофорез, електрофорез, ударно-хвильова терапія, магнітотерапія',
        offer: 'Знижки до 20%!', offerValue: '0.8',
        list: [
            {title: 'Лікувальний масаж верхньої кінцівки (2 кінцівки)', price: 360},
            {title: 'Лікувальний масаж голови (лобно-скроневої та потилично-тім\'яної області)', price: 480},
            {title: 'Лікувальний масаж голови та шиї', price: 540},
            {title: 'Лікувальний масаж грудної клітини (дренажний)', price: 540},
            {title: 'Лікувальний масаж живота', price: 290},
            {title: 'Лікувальний масаж нижньої кінцівки (2 кінцівки)', price: 650},
            {title: 'Лікувальний масаж попереково-крижового відділу хребта', price: 480},
            {title: 'Лікувальний масаж спини загальний', price: 870},
            {title: 'Лікувальний масаж хребта (паравертебральний)', price: 720},
            {title: 'Лікувальний масаж шийно-грудного відділу хребта', price: 650},
            {title: 'Лікувальний масаж шийно-комірцевої області', price: 650},
            {title: 'Профілактичний масаж загальний (спина, ноги, живіт, груди, руки, голова)', price: 1150},
            {title: 'Релакс масаж тіла', price: 1600},
            {title: 'Фонофорез (без препарату)', price: 250, fixedPrice: true},
            {title: 'Електрофорез (без препарату)', price: 250, fixedPrice: true},
            {title: 'Ударно-хвильова терапія (одна процедура)', price: 900, fixedPrice: true},
            {title: 'Магнітотерапія', price: 500, fixedPrice: true},
        ]
    },
    {
        icon: 'price-7', title: 'Інструментальні дослідження', text: 'Неінвазивні методи дослідження',
        list: [
            {title: 'Електрокардіограма (ЕКГ)', price: 300},
            {title: 'ЕКГ з розшифровкою', price: 360},
            {title: 'УЗД колінного, плечового, ліктьового, променево-зап\'ясткового, гомілковостопного суглоба', price: 660},
            {title: 'УЗД черевної порожнини', price: 750},
            {title: 'УЗД нирок', price: 600},
            {title: 'УЗД щитоподібної залози', price: 650},
        ]
    },
    {
        icon: 'price-6', title: 'Загальні медичні процедури', text: 'Маніпуляції загального медичного характеру',
        list: [
            { title: 'Забір крові з вени на лабораторні дослідження', price: 50 },
            { title: 'Забір біологічного матеріалу для аналізів (сечі, мокротиння, мазок із зіва та порожнини носа і т. п.)', price: 50 },
            { title: 'Внутрішньовенна інфузія 30 хв. (без вартості препарату)', price: 480 },
            { title: 'Вимирювання рівню цукру в крові', price: 130 },
            { title: 'Ін\'єкція внутрішньошкірна, підшкірна, внутрішньом\'язова, внутрішньовенна (без вартості препарату)', price: 100 },
            { title: 'Забір матеріалу на ПЛР-обстеження', price: 80 },
            { title: 'Проведення внутрішньошкірних проб', price: 100 }
        ]
    },
    {
        icon: 'price-8', title: 'Довідки', text: 'Оформлення медичної документації',
        list: [
            { title: 'Оформлення медичної документації', price: 250 },
            { title: 'Оформлення медичної документації (Довідка в басейн)', price: 360 },
            { title: 'Оформлення медичної документації (Довідка)', price: 180 }
        ]
    },
    {
        title: 'Довірте своє здоров\'я експертам GENIUS\u00a0health\u00a0clinic',
    },
];

export default function Price() {
    return (
        <div className={styles.price} id='prices'>
            <div className={styles.container}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.title}>Ціни на послуги</h2>
                </div>
            </div>
            <div className={styles.bg}>
                <div className={styles.container}>
                    {
                        price.map((item, index) => (
                            <PriceItem item={item} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}