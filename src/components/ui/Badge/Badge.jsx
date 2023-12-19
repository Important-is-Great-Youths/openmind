// Badge.jsx

import React from "react";
import styles from "./Badge.module.css";
import classNames from "classnames/bind";

const cs = classNames.bind(styles);

const Badge = ({ Completed }) => {
  const badgeClass = cs({
    badge: true,
    answer: Completed,
    unanswered: !Completed,
    //추가적인 클래스들
  });
  return <div className={badgeClass}>{Completed ? "답변완료" : "미답변"}</div>;
};

export default Badge;
