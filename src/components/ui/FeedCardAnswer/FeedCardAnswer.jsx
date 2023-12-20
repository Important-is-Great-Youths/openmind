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
          {/* {showAnswer ? (
            <form className={cx("inputArea")} onSubmit={handleAnswerSubmit}>
              <InputTextarea text={"질문을 입력해주세요"} value={inputText} onChange={handleInputChange} />
              <ButtonBox text={"답변완료"} qnaWidth="qnaWidth" qnaInactivate={inputText ? "" : "qnaInactivate"} />
            </form>
          ) : (
            <div className={cx("userAnswerDetail")} style={style}>
              {inputText}
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
