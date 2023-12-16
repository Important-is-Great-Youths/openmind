import styles from "./FeedCardQuestion.module.css";
import classNames from "classnames/bind";

export default function FeedCardQuestion() {
  const cx = classNames.bind(styles);

  return (
    <div>
      <div className={cx("questionTag")}>
        <span>질문 &middot; </span>
        <span>2주전</span>
      </div>
      <div className={cx("questionDes")}>좋아하는 동물은?좋아하는 동물은?좋아하는 동물은? 좋아하동 물은?</div>
    </div>
  );
}
