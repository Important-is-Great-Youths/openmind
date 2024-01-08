import { useParams } from "react-router";
import styles from "./FeedCardAnswer.module.css";
import classNames from "classnames/bind";
import { useGetSubject } from "../../../data-access/subjects/useGetSubject";
import { useGetAnswer } from "../../../data-access/answers/useGetAnswer";
import { getElapsedTime } from "../../../util/getElapsedTime";

const cx = classNames.bind(styles);

export default function FeedCardAnswer({ answerId, style, edit }) {
  const { id: subejctId } = useParams();

  const { data: subjectData } = useGetSubject(subejctId);
  const { imageSource, name } = subjectData || {};

  const { data: answerData } = useGetAnswer(answerId || "");
  const { id, questionId, content, isRejected, createdAt } = answerData || {};
  const answer = answerData
    ? { id, questionId, content, isRejected, createdAt }
    : null;

  const answerContent = answer ? answer.content : "";

  return (
    <div className={cx("feedCardAnswer")}>
      <div className={cx("imgBox")}>
        <img src={imageSource} alt="프로필" />
      </div>
      <div className={cx("userAnswer")}>
        <div className={cx("userProfile")}>
          <span className={cx("userName")}>{name}</span>
          <span className={cx("userCreateDate")}>
            {answer && getElapsedTime(answer.createdAt)}
          </span>
        </div>
        <div className={cx("userAnswerdetail")} style={style}>
          {!edit ? <p>{answerContent}</p> : null}
        </div>
      </div>
    </div>
  );
}
