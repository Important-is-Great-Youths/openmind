// Badge.jsx

import React from "react";
import styles from "./Badge.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface BadgeProps {
  Completed?: boolean;
}

const Badge = ({ Completed }: BadgeProps) => {
  const badgeType = Completed ? "complete" : "incomplete";
  return (
    <div className={cx(badgeType)}>{Completed ? "답변완료" : "미답변"}</div>
  );
};

export default Badge;
