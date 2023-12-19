// Badge.jsx

import React from "react";
import styles from "./Badge.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Badge = ({ Completed }) => {
  const badgeType = Completed ? "complete" : "incomplete";
  return (
    <div className={cx(badgeType)}>{Completed ? "답변완료" : "미답변"}</div>
  );
};

export default Badge;
