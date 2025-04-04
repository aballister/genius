import styles from './trust.module.css';
import Image from 'next/image';

export default function Trust() {
    return (
        <div className={styles.trust}>
            <div className={styles.container}>
                <h2 className={styles.title}>Чому нам довіряють</h2>
                <div className={styles.trustItems}>
                    <div className={styles.trustItem}>
                        <div className={styles.iconWrapper}>
                            <Image
                                className={styles.icon}
                                src="/trust-1.svg"
                                alt="hex"
                                width={67}
                                height={78}
                            />
                        </div>
                        Експертність
                    </div>
                    <div className={styles.trustItem}>
                        <div className={styles.iconWrapper}>
                            <Image
                                className={styles.icon}
                                src="/trust-2.svg"
                                alt="hex"
                                width={68}
                                height={78}
                            />
                        </div>
                        Безпека
                    </div>
                    <div className={styles.trustItem}>
                        <div className={styles.iconWrapper}>
                            <Image
                                className={styles.icon}
                                src="/trust-3.svg"
                                alt="hex"
                                width={70}
                                height={61}
                            />
                        </div>
                        Комфорт
                    </div>
                    <div className={styles.trustItem}>
                        <div className={styles.iconWrapper}>
                            <Image
                                className={styles.icon}
                                src="/trust-4.svg"
                                alt="hex"
                                width={68}
                                height={70}
                            />
                        </div>
                        Доступність
                    </div>
                    <div className={styles.trustItem}>
                        <div className={styles.iconWrapper}>
                            <Image
                                className={styles.icon}
                                src="/trust-5.svg"
                                alt="hex"
                                width={60}
                                height={76}
                            />
                        </div>
                        Широкий спектр послуг
                    </div>
                    <div className={styles.trustItem}>
                        <div className={styles.iconWrapper}>
                            <Image
                                className={styles.icon}
                                src="/trust-6.svg"
                                alt="hex"
                                width={68}
                                height={72}
                            />
                        </div>
                        Зручне розташування
                    </div>
                    <div className={styles.trustItem}>
                        <div className={styles.iconWrapper}>
                            <Image
                                className={styles.icon}
                                src="/trust-7.svg"
                                alt="hex"
                                width={68}
                                height={70}
                            />
                        </div>
                        Працюємо без світла
                    </div>
                </div>
            </div>
        </div>
    )
}