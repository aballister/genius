"use client"
import styles from './price.module.css';
import PriceItem from '@/components/Price/PriceItem/PriceItem';
import { price } from '@/data/price';

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