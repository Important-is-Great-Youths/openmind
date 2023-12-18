import styles from "./FeedCardAnswer.module.css";
import classNames from "classnames/bind";
import InputTextarea from "../InputTextarea/InputTextarea";
import ButtonBox from "../ButtonBox/ButtonBox";
import { useState, useEffect } from "react";

export default function FeedCardAnswer({ answerText, style }) {
  const cx = classNames.bind(styles);
  const [inputText, setInputText] = useState("");
  const [showAnswer, setShowAnswer] = useState(true);

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setInputText(newText);
  };

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    if (!inputText) {
      setShowAnswer(true);
    } else {
      setShowAnswer(false);
    }
  };

  useEffect(() => {
    if (answerText) {
      setShowAnswer(false);
      setInputText(answerText);
    }
  }, [answerText]);

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
          {showAnswer ? (
            <form className={cx("inputArea")} onSubmit={handleAnswerSubmit}>
              <InputTextarea text={"질문을 입력해주세요"} value={inputText} onChange={handleInputChange} />
              <ButtonBox text={"답변완료"} qnaWidth="qnaWidth" qnaInactivate={inputText ? "" : "qnaInactivate"} />
            </form>
          ) : (
            <div className={cx("userAnswerDetail")} style={style}>
              {inputText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
