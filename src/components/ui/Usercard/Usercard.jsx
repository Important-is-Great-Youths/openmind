// Usercard.jsx
import React from 'react';
import styles from './Usercard.module.css';
import {ReactComponent as IconMessage} from '../../../icon/icon-messages.svg'

const Usercard = () => {
    return (
        <a href="/post/1261" className={styles.usercardLink}>
            <div className={styles.usercard}>
                <div className={styles.profileInfo}>
                    <img className={styles.profileImage} src='assets/temp-profile.png' alt='temp-profile'/>
                    <p className={styles.profileName}>아초는 고양이</p>
                </div>
                <div className={styles.messageInfo}>

                        <IconMessage className={styles.messageIcon}/>
                        <p className={styles.messageLabel}>받은 질문</p>
                    
                    <p className={styles.messageCount}>0개</p>
                </div>
            </div>
        </a>
    );
};

export default Usercard;
