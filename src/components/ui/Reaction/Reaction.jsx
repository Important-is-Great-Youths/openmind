import stylesheet from "./Reaction.module.css";
import classNames from "classnames/bind";
import React, { useState, useEffect } from "react";
import { ReactComponent as Thumbup } from "../../../icon/icon-thumbs-up.svg";
import { ReactComponent as Thumbdown } from "../../../icon/icon-thumbs-down.svg";

export default function Reaction() {
  const cx = classNames.bind(stylesheet);
  const initialCountLike = parseInt(localStorage.getItem("like")) || 0;
  const initialCountHate = parseInt(localStorage.getItem("hate")) || 0;
  const [like, setLike] = useState(initialCountLike);
  const [hate, setHate] = useState(initialCountHate);
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);

  const handleLikeClick = () => {
    if (up) {
      setLike(like - 1);
    } else {
      setLike(like + 1);
    }
    setUp(!up);
  };

  const handleHateClick = () => {
    if (down) {
      setHate(hate - 1);
    } else {
      setHate(hate + 1);
    }
    setDown(!down);
  };

  useEffect(() => {
    localStorage.setItem("like", like.toString());
  }, [like]);

  useEffect(() => {
    localStorage.setItem("hate", hate.toString());
  }, [hate]);

  return (
    <>
      <button className={cx("buttondiv", { up })} onClick={handleLikeClick}>
        <Thumbup className={cx("img")} />
        좋아요 {like}
      </button>
      <button className={cx("buttondiv", { down })} onClick={handleHateClick}>
        <Thumbdown className={cx("img")} />
        싫어요 {hate}
      </button>
    </>
  );
}
