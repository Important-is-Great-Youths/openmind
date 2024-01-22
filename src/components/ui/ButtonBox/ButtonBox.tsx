import React from "react";
import styles from "./ButtonBox.module.scss";
import { ReactComponent as ArrowNext } from "../../../icon/icon-arrow-next.svg";
import classNames from "classnames/bind";

interface ButtonBoxProps {
  text: string;
  qnaBtn?: string;
  qnaWidth: string;
  qnaInactivate: string;
  onClick?: any;
  onClose?: any;
}

const ButtonBox: React.FC<ButtonBoxProps> = ({
  text,
  qnaBtn,
  qnaWidth,
  qnaInactivate,
  onClick,
  onClose,
}: ButtonBoxProps) => {
  const cx = classNames.bind(styles);
  const cssQnaBtn = qnaBtn;

  const handleButtonClick = async () => {
    onClick && (await onClick());
    onClose && (await onClose());
  };

  return (
    <button
      className={cx("qnaBtn", cssQnaBtn, qnaWidth, qnaInactivate, {
        noArrow: !cssQnaBtn,
      })}
      onClick={handleButtonClick}
    >
      <span>{text}</span>
      {cssQnaBtn && <ArrowNext className={cx("arrowNext")} />}
    </button>
  );
};

export default ButtonBox;
