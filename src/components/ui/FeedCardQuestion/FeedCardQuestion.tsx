import React from "react";
import { getElapsedTime } from "../../../util/getElapsedTime";
import styles from "./FeedCardQuestion.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface FeedCardQuestionProps {
  text: string;
  date: Date;
}

export default function FeedCardQuestion({
  text,
  date,
}: FeedCardQuestionProps) {
  return (
    <div>
      <div className={cx("questionTag")}>
        <span>질문 &middot; </span>
        <span>{getElapsedTime(date)}</span>
      </div>
      <div className={cx("questionDes")}>{text}</div>
    </div>
  );
}
