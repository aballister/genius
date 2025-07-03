"use client"
import styles from './price-item.module.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import PriceButton from '@/components/Price/PriceButton';

export default function PriceItem({item}) {
    const [opened, setOpened] = useState(false);
    const onClick = useCallback(() => {
        if (!item.list) return;
        setOpened(state => !state);
    }, [item]);
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setOpened(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchend", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchend", handleClickOutside);
        };
    }, [wrapperRef]);

    return (
        <div ref={wrapperRef} className={`${styles.container} ${opened && styles.containerOpened} ${item.list && styles.containerButton}`} onClick={onClick}>
            <div className={`${styles.wrapper} ${!item.list && styles.notList}`}>
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
                    <div className={styles.title}>{item.title}
                        {item.offer && <div className={styles.offer}>{item.offer}</div>}
                    </div>
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
                        </> :
                        <PriceButton />
                }
            </div>
            {
                item.list &&
                opened &&
                <div className={styles.info}>
                    {
                        item.list.map((el, index) => {
                            return (
                                <div className={styles.infoItem} key={index}>
                                    <div className={styles.infoTitle}>{el.title}</div>
                                    <div className={`${styles.infoPrice} ${((!el.fixedPrice && item.offerValue) || el.offerPrice) && styles.infoPriceLower}`}>
                                        <span>{el.price}</span>
                                        {
                                            ((!el.fixedPrice && item.offerValue) || el.offerPrice) &&
                                            <span>{el.offerPrice || el.price * item.offerValue}</span>
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}