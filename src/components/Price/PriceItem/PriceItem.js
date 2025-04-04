"use client"
import styles from './price-item.module.css';
import { useCallback, useState } from 'react';

export default function PriceItem({item}) {
    const [opened, setOpened] = useState(false);
    const onClick = useCallback(() => {
        if (!item.list) return;
        setOpened(state => !state);
    }, [item]);

    return (
        <div className={`${styles.container} ${opened && styles.containerOpened} ${item.list && styles.containerButton}`} onClick={onClick}>
            {
                item.icon &&
                <img
                    width={40}
                    height={40}
                    alt={item.title}
                    src={`/price/${item.icon}.svg`}
                    className={styles.icon}
                />
            }
            <div className={styles.item}>
                <div className={styles.title}>{item.title}</div>
                {
                    item.text &&
                    <div className={styles.text}>{item.text}</div>
                }
            </div>
            {
                item.list ?
                    <>
                        <img
                            width={20}
                            height={20}
                            alt='plus'
                            src={`/${opened ? 'minus' : 'plus'}-icon.svg`}
                        />
                        {
                            opened &&
                            <div className={styles.info}>
                                {
                                    item.list.map((el, index) => {
                                        return (
                                            <div className={styles.infoItem} key={index}>
                                                <div className={styles.infoTitle}>{el.title}</div>
                                                <div className={styles.infoPrice}>{el.price}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                    </> :
                    <button className={styles.button} onClick={(e) => {e.stopPropagation()}}>ЗАПИСАТИСЬ ДО ЛІКАРЯ</button>
            }
        </div>
    )
}