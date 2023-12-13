import stylesheet from "./Reaction.module.css";
import classNames from "classnames/bind";
import { useState } from "react";
import { ReactComponent as Thumbup } from "../../icon/icon-thumbs-up.svg";
import { ReactComponent as Thumbdown } from "../../icon/icon-thumbs-down.svg";

export default function Reaction() {
  const cx = classNames.bind(stylesheet);
  const [like, setLike] = useState(0);
  const [hate, setHate] = useState(0);

  return (
    <>
      <button
        className={cx("buttondiv")}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        <Thumbup className={cx("img")} />
        좋아요 {like}
      </button>
      <button
        className={cx("buttondiv")}
        onClick={() => {
          setHate(hate + 1);
        }}
      >
        <Thumbdown className={cx("img")} />
        싫어요 {hate}
      </button>
    </>
  );
}
