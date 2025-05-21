import styles from '@/components/Reviews/reviews.module.css';

export default function SliderControls({instanceRef}) {
    return (
            <div className={styles.sliderControls}>
                <button
                    className={styles.sliderLeft}
                    onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                    }
                >
                    <svg className={styles.arrowLeft} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={styles.arrowPath}
                              d="M14.5469 7.18752H1.07815M1.07815 7.18752L7.8125 0.45317M1.07815 7.18752L7.8125 13.9219"
                              stroke="#099582"/>
                    </svg>
                </button>

                <button
                    className={styles.sliderRight}
                    onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.next()
                    }
                >
                    <svg className={styles.arrowRight} width="15" height="15" viewBox="0 0 15 15"                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={styles.arrowPath}
                              d="M14.5469 7.18752H1.07815M1.07815 7.18752L7.8125 0.45317M1.07815 7.18752L7.8125 13.9219"
                              stroke="#099582"/>
                    </svg>
                </button>
            </div>
    )
}