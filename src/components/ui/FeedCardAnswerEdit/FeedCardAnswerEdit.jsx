import styles from "./FeedCardAnswerEdit.module.css";
import classNames from "classnames/bind";
import ButtonBox from "../ButtonBox/ButtonBox";
import { useState } from "react";

const cx = classNames.bind(styles);

export default function FeedCardAnswerEdit({ children }) {
  const [editText, setEditText] = useState(children); // useState로 초기 상태 설정
  const [isEmpty, setIsEmpty] = useState(children ? false : true);

  const handleOnChange = (e) => {
    const textValue = e.target.value;
    setEditText(textValue);
    setIsEmpty(!textValue.trim());
  };

  const handleOnClick = () => {
    alert("onclick");
  };

  return (
    <div className={cx("answerEdit")}>
      <textarea
        className={cx("answerInput")}
        value={editText} // 텍스트에 상태값을 설정해야 함
        onChange={handleOnChange} // 텍스트 입력이 발생할 때마다 상태 업데이트
        placeholder="답변을 입력해주세요."
        required
      />
      <ButtonBox
        text="수정 완료"
        qnaWidth="qnaWidth"
        qnaInactivate={isEmpty ? "qnaInactivate" : ""}
        onClick={handleOnClick}
      />
    </div>
  );
}
