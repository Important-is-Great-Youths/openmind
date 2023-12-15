import styles from "./FeedCardAnswer.module.css";
import classNames from "classnames/bind";

export default function FeedCardAnswer({ text, style }) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("feedCardAnswer")}>
      <div className={cx("imgBox")}>
        <img src="assets/temp-profile.png" alt="프로필" />
      </div>
      <div>
        <div className={cx("userAnswer")}>
          <div className={cx("userProfile")}>
            <span className={cx("userName")}>아초는 고양이</span>
            <span className={cx("userCreateDate")}>2주전</span>
          </div>
          <div className={cx("userAnswerdetail")} style={style}>
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}
