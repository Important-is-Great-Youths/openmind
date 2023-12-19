import { getElapsedTime } from "../../../util/getElapsedTime";
import styles from "./FeedCardQuestion.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function FeedCardQuestion({ text, date }) {
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
