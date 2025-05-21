"use client"
import styles from './modal.module.css';
import FormBody from '@/components/Form/FormBody/FormBody';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setModalAction } from '@/store/slices/uiSlice';

export default function Modal () {
    const isVisible = useSelector(state => state.ui.isVisible);
    const dispatch = useDispatch();

    const closeHandler = () => {
        dispatch(setModalAction(null))
    }

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
                <FormBody title={isVisible} />
            </div>
        </div>
    )
}