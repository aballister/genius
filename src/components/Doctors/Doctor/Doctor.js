import styles from './doctor.module.css';
import { useCallback, useState } from 'react';

export default function Doctor({item}) {
    const [hideInfo, setHideInfo] = useState(true);

    const infoToggle = useCallback(() => {
        setHideInfo(state => !state);
    }, []);

    return (
        <div className='keen-slider__slide'>
            <div className={styles.sliderItem}>
                <img
                    alt={item.name}
                    src={`/${item.img}`}
                    className={styles.image}
                />
                <p className={styles.doctorTitle}>{item.name}</p>
                <p className={styles.doctorPosition}>{item.position}</p>
                <div className={`${styles.doctorInfo} ${hideInfo && styles.hidden}`}>
                    {
                        item.exp &&
                        <p className={styles.doctorExp}><span className={styles.strong}>Досвід роботи:</span> {item.exp}</p>
                    }
                    {
                        item.info.split('\n').map((item, index) => <p key={index} className={styles.doctorText}>{item}</p>)
                    }
                </div>
                {
                    (item.info || item.exp) &&
                    <button className={styles.doctorMore} onClick={infoToggle}>
                        {
                            !hideInfo ?
                                'згорнути' :
                                'дізнатися більше'
                        }
                    </button>
                }
            </div>
        </div>
    )
}