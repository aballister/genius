'use client'

import { useDispatch } from 'react-redux';
import { setModalAction } from '@/store/slices/uiSlice';
import styles from '@/components/Price/PriceItem/price-item.module.css';

export default function PriceButton() {
    const dispatch = useDispatch();

    const modalHandler = () => {
        dispatch(setModalAction('Запис онлайн'))
    }

    return (
        <button className={styles.button} onClick={modalHandler}>ЗАПИСАТИСЬ ДО ЛІКАРЯ</button>
    )
}