// Badge.jsx

import React from "react";
import styles from "./Badge.module.css";

const Badge = () => {
    return (
        <div className={styles.container}>
            <div className={styles.complete}>
                답변완료
            </div>
            <div className={styles.incomplete}>
                미답변
            </div>
        </div>
    );
};

export default Badge;

s