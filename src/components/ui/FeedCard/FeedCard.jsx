import styles from "./FeedCard.module.css";
import classNames from "classnames/bind";
import FeedCardAnswer from "../FeedCardAnswer/FeedCardAnswer";
import FeedCardQuestion from "../FeedCardQuestion/FeedCardQuestion";
import { ReactComponent as More } from "../../../icon/icon-more.svg";
import { useState, useEffect } from "react";

/* 
more 버튼을 숨기고 싶은 경우,
부모 컴포넌트에 다음 코드를 추가해주세요

const [askFeed, setAskFeed] = useState(false);
<FeedCard askFeed={askFeed} />
*/
const cx = classNames.bind(styles);

export default function FeedCard({ askFeed, data }) {
  const { content, answer, createdAt } = data;
  const [toggle, setToggle] = useState(false);
  const [answerText, setAnswerText] = useState("");

  const delAndRejectionHandler = (event) => {
    event.stopPropagation();
    setToggle(!toggle);
  };

  const unShowHandler = () => {
    setToggle(false);
  };

  const rejectionBtnHandler = () => {
    setToggle(false);
    setAnswerText("답변거절");
  };

  useEffect(() => {
    document.addEventListener("click", unShowHandler);

    return () => {
      document.removeEventListener("click", unShowHandler);
    };
  }, []);

  const answerStyle = {
    color: answerText === "답변거절" ? "#B93333" : "inherit",
  };

  return (
    <div className={cx("feedCard")}>
      <div className={cx("feedTop")}>
        <div>답변완료</div>
        {askFeed && (
          <div className={cx("delAndRejectionToggle")}>
            <More className={cx("moreBtn")} onClick={delAndRejectionHandler} />
            {toggle && (
              <div className={cx("delAndRejection")}>
                <div className={cx("rejection")} onClick={rejectionBtnHandler}>
                  답변거절
                </div>
                <div className={cx("delete")}>질문삭제</div>
              </div>
            )}
          </div>
        )}
      </div>
      <FeedCardQuestion text={content} date={createdAt} />
      <FeedCardAnswer text={answerText} style={answerStyle} />
      <i className={cx("feedBar")}></i>
      <div>
        <span>좋아요 </span>
        <span>싫어요</span>
      </div>
    </div>
  );
}
