import React from "react";
import styles from "./ButtonFloating.module.scss";
import classNames from "classnames/bind";

/* 
  삭제하기(작은 사이즈의 버튼)을 쓸때 
  <ButtonFloating text={"삭제하기"} small="small" />
*/

interface ButtonFloatingProps {
  text: string;
  small: string;
  onClick: () => void;
}

export default function ButtonFloating({
  text,
  small,
  onClick,
}: ButtonFloatingProps) {
  const cx = classNames.bind(styles);
  return (
    <>
      <button className={cx("btn", small)} onClick={onClick}>
        {text}
      </button>
    </>
  );
}
