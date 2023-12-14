//Usercard.jsx
import React from 'react';
import styles from './Usecard.module.css';
import catImage from '../../icon/cat_use.svg';

const Usercard = () => {
    return (
        <div className={styles.usecard}>
            <div className={styles.deviceBox}>
                <div className={styles.frame51}>
                    {/* 내용 */}
                </div>
                <div className={styles.frame59}>
                    <div className={styles.imgContainer} style={{ background: `url(${catImage}) center/cover no-repeat, var(--grayscale-20)` }}></div>
                    <div className={styles.textContainer}>
                        <div className={styles.text}>아초는 고양이</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Usercard;
