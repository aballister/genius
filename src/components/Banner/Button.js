'use client'

import { useDispatch } from 'react-redux';
import { setModalAction } from '@/store/slices/uiSlice';
import styles from '@/components/Banner/banner.module.css';

export default function BannerButton() {
    const dispatch = useDispatch();

    const modalHandler = () => {
        dispatch(setModalAction('Запис онлайн'))
    }

    return (
        <button className={styles.button} onClick={modalHandler}>Записатись на прийом</button>
    )
}