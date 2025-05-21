'use client'
import styles from './form_body.module.css';
import { useState, useRef } from 'react';
import { setModalAction, setSuccessModalAction } from '@/store/slices/uiSlice';
import { useDispatch } from 'react-redux';

export default function FormBody({ title }) {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const formRef = useRef(null);
    const dispatch = useDispatch();

    const subtitle =
        title === 'Залишити відгук'
            ? 'Заповніть Ваші контактні дані та залиште Ваш відгук про лікаря або послугу'
            : 'Заповніть Ваші контактні дані, в найближчий час з вами зв’яжеться наш менеджер';

    const label = title === 'Залишити відгук' ? 'Ваш відгук' : 'Ваш коментар';
    const placeholder =
        title === 'Залишити відгук' ? '' : 'Вкажіть послугу, яка вас цікавить';

    const button =
        title === 'Залишити відгук' || title === 'Зворотній зв’язок'
            ? 'НАДІСЛАТИ'
            : 'ЗАПИСАТИСЬ';

    const validate = (data) => {
        const newErrors = {};
        if (!data.name || data.name.trim().length < 2) {
            newErrors.name = "Ім’я повинно містити щонайменше 2 літери";
        }
        const phonePattern = /^[0-9\s\-\+\(\)]{7,}$/;
        if (!data.phone || !phonePattern.test(data.phone)) {
            newErrors.phone = 'Введіть коректний номер телефону (мінімум 7 цифр)';
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});
        dispatch(setSuccessModalAction(null));

        const form = new FormData(e.target);
        const data = {
            name: form.get('name'),
            phone: form.get('phone'),
            comment: form.get('comment'),
        };

        const validationErrors = validate(data);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false);
            return;
        }

        const res = await fetch('https://genius.com.ua/mail.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            dispatch(setModalAction(null));
            dispatch(setSuccessModalAction(button === 'НАДІСЛАТИ' ? 'review-success' : 'success'));
            formRef.current.reset();
        } else {
            dispatch(setModalAction(null));
            dispatch(setSuccessModalAction('error'));
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} ref={formRef} className={styles.form} noValidate>
            <div className={styles.title}>{title}</div>
            <div className={styles.subtitle}>{subtitle}</div>
            <label htmlFor="name" className={styles.label}>Ваше Ім’я та Прізвище</label>
            <input
                type="text"
                name="name"
                id="name"
                className={`${styles.input} ${errors.name && styles.error}`}
                placeholder="Введіть Ваше Ім’я та Прізвище"
                required
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}

            <label htmlFor="phone" className={styles.label}>Ваш номер телефону</label>
            <input
                type="text"
                name="phone"
                id="phone"
                className={`${styles.input} ${errors.phone && styles.error}`}
                placeholder="+38 (_ _ _) _ _ _  _ _  _ _"
                inputMode="tel"
                required
            />
            {errors.phone && <p className={styles.error}>{errors.phone}</p>}

            <label htmlFor="comment" className={styles.label}>{label}</label>
            <input
                type="text"
                name="comment"
                id="comment"
                className={styles.input}
                placeholder={placeholder}
            />

            <button type="submit" className={styles.button} disabled={loading}>
                {loading ? 'Надсилаємо...' : button}
            </button>
        </form>
    );
}
