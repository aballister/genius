"use client"
import styles from './modal.module.css';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setSuccessModalAction } from '@/store/slices/uiSlice';

export default function ModalSuccess () {
    const isVisible = useSelector(state => state.ui.successIsVisible);
    const dispatch = useDispatch();

    const closeHandler = () => {
        dispatch(setSuccessModalAction(null))
    }

    const text = isVisible !== 'review-success' ? 'Очікуйте дзвінок від нашого менеджера' : 'Ми цінуємо Вашу думку'

    if (!isVisible) {
        return null;
    }

    return (
        <div className={styles.container} onClick={closeHandler}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.button} onClick={closeHandler}>
                    <Image
                        src="/close.svg"
                        alt="close"
                        width={24}
                        height={24}
                        priority
                    />
                </button>
                <div className={styles.subtitle}>health clinic</div>
                <div className={styles.title}>GENIUS</div>
                {
                    isVisible === 'error' ?
                        <div className={styles.text}>Виникла помилка при надсиланні. <br/>Будь ласка, спробуйте ще раз.</div> :
                        <div className={styles.text}>Дякуємо за довіру.<br/>
                            {text}.</div>
                }

            </div>
        </div>
    )
}