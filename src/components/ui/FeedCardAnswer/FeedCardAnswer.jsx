import { useParams } from "react-router";
import styles from "./FeedCardAnswer.module.css";
import classNames from "classnames/bind";
import { useGetSubject } from "../../../data-access/subjects/useGetSubject";

const cx = classNames.bind(styles);

export default function FeedCardAnswer({ text, style }) {
  const { id } = useParams();
  const { data } = useGetSubject(id);
  const { imageSource, name } = data || {};

  return (
    <div className={cx("feedCardAnswer")}>
      <div className={cx("imgBox")}>
        <img src={imageSource} alt="프로필" />
      </div>
      <div>
        <div className={cx("userAnswer")}>
          <div className={cx("userProfile")}>
            <span className={cx("userName")}>{name}</span>
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
