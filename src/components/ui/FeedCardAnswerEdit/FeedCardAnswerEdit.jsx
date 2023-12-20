import styles from "./FeedCardAnswerEdit.module.css";
import classNames from "classnames/bind";
import ButtonBox from "../ButtonBox/ButtonBox";

const cx = classNames.bind(styles);

export default function FeedCardAnswerEdit() {
  return (
    <div>
      <div className={cx("answerInput")}>answers</div>
      <ButtonBox>답변완료</ButtonBox>
    </div>
  );
}
