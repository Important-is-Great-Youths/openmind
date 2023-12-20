import styles from "./FeedCardAnswerEdit.module.css";
import classNames from "classnames/bind";
import ButtonBox from "../ButtonBox/ButtonBox";

const cx = classNames.bind(styles);

export default function FeedCardAnswerEdit() {
  const handleOnClick = () => {
    alert("onclick");
  };
  return (
    <div className={cx("answerEdit")}>
      <div className={cx("answerInput")}>
        <p>모든 국민은</p>
      </div>
      <ButtonBox text="답변 완료" qnaWidth="qnaWidth" onClick={handleOnClick} />
    </div>
  );
}
