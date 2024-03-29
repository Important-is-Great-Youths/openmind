import React from "react";
import styles from "./FeedCard.module.scss";
import classNames from "classnames/bind";
import FeedCardAnswer from "../FeedCardAnswer/FeedCardAnswer";
import FeedCardQuestion from "../FeedCardQuestion/FeedCardQuestion";
import { ReactComponent as More } from "../../../icon/icon-more.svg";
import { useState, useEffect } from "react";
import Badge from "../Badge/Badge";
import Reaction from "../Reaction/Reaction";
/* 
more 버튼을 숨기고 싶은 경우,
부모 컴포넌트에 다음 코드를 추가해주세요

const [askFeed, setAskFeed] = useState(false); 숨기고 싶은 경우
const [askFeed, setAskFeed] = useState(true); 보이고 싶은 경우
<FeedCard askFeed={askFeed} />
*/
const cx = classNames.bind(styles);

interface FeedCardProps {
  askFeed: boolean;
  data: {
    id: number;
    content: string;
    answer: {
      id: number;
    };
    createdAt: Date;
  };
}

export default function FeedCard({ askFeed, data }: FeedCardProps) {
  const { id: questionId, content, answer, createdAt } = data;
  const [toggle, setToggle] = useState<boolean>(false);
  const [answerText, setAnswerText] = useState<string>("");
  const [invisible, setInvisible] = useState<boolean>(true);
  const answerId = answer ? answer.id : null;

  const delAndRejectionHandler = (
    event: React.MouseEvent<SVGElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setToggle(!toggle);
  };

  const unShowHandler = () => {
    setToggle(false);
  };

  const rejectionBtnHandler = () => {
    setToggle(false);
    setAnswerText("답변거절");
    setInvisible(false);
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

  const delAndRejectionStyle = {
    bottom: answerText === "답변거절" ? "-42px" : "-72px",
  };

  // 댭변거절 || testArea에 글이 있을 경우 ( badge에 Completed 답변완료)
  //

  return (
    <ul className={cx("cardList")}>
      <li className={cx("cardWrap")}>
        <div className={cx("feedCard")}>
          <div className={cx("feedTop")}>
            <Badge />
            {askFeed && (
              <div className={cx("delAndRejectionToggle")}>
                <More
                  className={cx("moreBtn")}
                  onClick={delAndRejectionHandler}
                />
                {toggle && (
                  <div
                    className={cx("delAndRejection")}
                    style={delAndRejectionStyle}
                  >
                    {invisible && (
                      <div
                        className={cx("rejection")}
                        onClick={rejectionBtnHandler}
                      >
                        답변거절
                      </div>
                    )}
                    <div className={cx("delete")}>질문삭제</div>
                  </div>
                )}
              </div>
            )}
          </div>
          <FeedCardQuestion text={content} date={createdAt} />
          {answerId && (
            <FeedCardAnswer
              answerId={answerId}
              answerText={answerText}
              style={answerStyle}
            />
          )}
          <i className={cx("feedBar")}></i>
          <Reaction questionId={questionId} />
        </div>
      </li>
    </ul>
  );
}
