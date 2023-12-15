import stylesheet from "./Reaction.module.css";
import classNames from "classnames/bind";
import React, { useState } from "react";
import { ReactComponent as Thumbup } from "../../icon/icon-thumbs-up.svg";
import { ReactComponent as Thumbdown } from "../../icon/icon-thumbs-down.svg";

export default function Reaction() {
  const cx = classNames.bind(stylesheet);
  const [like, setLike] = useState(0);
  const [hate, setHate] = useState(0);
  const [likeActive, setLikeActive] = useState(false);
  const [hateActive, setHateActive] = useState(false);

  const handleLikeClick = () => {
    setLike(like + 1);
    setLikeActive(!likeActive);
  };

  const handleHateClick = () => {
    setHate(hate + 1);
    setHateActive(!hateActive);
  };

  return (
    <>
      <button
        className={cx("buttondiv", { active: likeActive })}
        onClick={handleLikeClick}
      >
        <Thumbup className={cx("img", { active: likeActive })} />
        좋아요 {like}
      </button>
      <button
        className={cx("buttondiv", { active: hateActive })}
        onClick={handleHateClick}
      >
        <Thumbdown className={cx("img", { active: hateActive })} />
        싫어요 {hate}
      </button>
    </>
  );
}
