import stylesheet from "./Reaction.module.css";
import classNames from "classnames/bind";
import React, { useState, useEffect } from "react";
import { ReactComponent as Thumbup } from "../../../icon/icon-thumbs-up.svg";
import { ReactComponent as Thumbdown } from "../../../icon/icon-thumbs-down.svg";
import { useGetQuestion } from "../../../data-access/questions/useGetQuestion";
import usePostQuestionReaction from "../../../data-access/questions/usePostQuestionReaction";

export default function Reaction({ questionId }) {
  const cx = classNames.bind(stylesheet);
  const { data: questionData } = useGetQuestion(questionId);
  const { like: questionLike, dislike: questionDislike } = questionData || {};
  const { postQuestionReaction } = usePostQuestionReaction(questionId);
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);

  const handleLikeClick = async () => {
    setUp(!up);
    try {
      await postQuestionReaction("like");
    } catch (error) {
      console.error("like Error", error);
    }
  };

  const handleHateClick = () => {
    setDown(!down);
    postQuestionReaction("dislike");
  };


  return (
    <div className={cx("reactionDiv")}>
      <button className={cx("buttondiv", { up })} onClick={handleLikeClick}>
        <Thumbup className={cx("img")} />
        좋아요 {questionLike}
      </button>
      <button className={cx("buttondiv", { down })} onClick={handleHateClick}>
        <Thumbdown className={cx("img")} />
        싫어요 {questionDislike}
      </button>
    </div>
  );
}
