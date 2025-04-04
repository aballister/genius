import styles from './doctor.module.css';
import { useCallback, useState } from 'react';

export default function Doctor() {
    const [hideInfo, setHideInfo] = useState(true);

    const infoToggle = useCallback(() => {
        setHideInfo(state => !state);
    }, []);

    return (
        <div className='keen-slider__slide'>
            <div className={styles.sliderItem}>
                <img
                    alt='Kovalenko'
                    src='/kovalenko.png'
                    className={styles.image}
                />
                <p className={styles.doctorTitle}>Олена Коваленко</p>
                <p className={styles.doctorPosition}>кардіолог</p>
                {
                    !hideInfo &&
                    <div className={styles.doctorInfo}>
                        <p className={styles.doctorExp}><span className={styles.strong}>Досвід роботи:</span> 23 роки</p>
                        <p className={styles.doctorText}>лікар-кардіолог, лікар функціональної діагностики, лікар першої
                            категорії, кандидат медичних наук</p>
                    </div>
                }
                <button className={styles.doctorMore} onClick={infoToggle}>
                    {
                        !hideInfo ?
                            'згорнути' :
                            'дізнатися більше'
                    }
                </button>
            </div>
        </div>
    )
}