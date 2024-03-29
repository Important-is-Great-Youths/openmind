import stylesheet from "./Reaction.module.scss";
import classNames from "classnames/bind";
import React, { useState, useEffect } from "react";
import { ReactComponent as Thumbup } from "../../../icon/icon-thumbs-up.svg";
import { ReactComponent as Thumbdown } from "../../../icon/icon-thumbs-down.svg";
import { useGetQuestion } from "../../../data-access/questions/useGetQuestion";

interface ReactionProps {
  questionId: number;
  like?: number;
  dislike?: number;
}

export default function Reaction({ questionId }: ReactionProps) {
  const cx = classNames.bind(stylesheet);

  const { data: questionData } = useGetQuestion(questionId);
  const { like: questionLike, dislike: questionDislike } =
    questionData || ({} as ReactionProps);

  const initialCountLike = parseInt(localStorage.getItem("like")) || 0;
  const initialCountHate = parseInt(localStorage.getItem("hate")) || 0;

  const [like, setLike] = useState<number>(initialCountLike);
  const [hate, setHate] = useState<number>(initialCountHate);
  const [up, setUp] = useState<boolean>(false);
  const [down, setDown] = useState<boolean>(false);

  const handleLikeClick = async () => {
    if (up) {
      setLike(like - 1);
    } else {
      setLike(like + 1);
    }
    setUp(!up);
    console.log(questionLike);
    // try {
    //   await postQuestionReaction("like");
    // } catch (error) {
    //   console.error("like Error", error);
    // }
  };

  const handleHateClick = () => {
    if (down) {
      setHate(hate - 1);
    } else {
      setHate(hate + 1);
    }
    setDown(!down);
    // postQuestionReaction("dislike");
  };

  useEffect(() => {
    localStorage.setItem("like", like.toString());
  }, [like]);

  useEffect(() => {
    localStorage.setItem("hate", hate.toString());
  }, [hate]);

  return (
    <div className={cx("reactionDiv")}>
      <button className={cx("buttondiv", { up })} onClick={handleLikeClick}>
        <Thumbup className={cx("img")} />
        좋아요 {questionLike + like}
      </button>
      <button className={cx("buttondiv", { down })} onClick={handleHateClick}>
        <Thumbdown className={cx("img")} />
        싫어요 {questionDislike + hate}
      </button>
    </div>
  );
}
