import styles from "./FeedCardAnswerEdit.module.css";
import classNames from "classnames/bind";
import ButtonBox from "../ButtonBox/ButtonBox";
const cx = classNames.bind(styles);

export default function FeedCardAnswerEdit({ children }) {
  const handleOnClick = () => {
    alert("onclick");
  };
  return (
    <div className={cx("answerEdit")}>
      <div className={cx("answerInput")}>
        <p>{children}</p>
      </div>
      <ButtonBox text="답변 완료" qnaWidth="qnaWidth" onClick={handleOnClick} />
    </div>
  );
}
