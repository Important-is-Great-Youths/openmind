import styles from "./ButtonBox.module.css";
import { ReactComponent as ArrowNext } from "../../../icon/icon-arrow-next.svg";
import classNames from "classnames/bind";

/* 질문 받기 (화살표없음)이 기본 style로 적용됩니다.
qnaBtn = "answerBtn"  답변하러가기 -> (화살표 있음) 버튼 style이 적용됩니다.

추가 style 적용하려면 아래 클래스명을 추가하세요.
width 100% : qnaWidth="qnaWidth"
비활성상태 : qnaInactivate = "qnaInactivate" 
*/

export default function ButtonBox({
  text,
  qnaBtn,
  qnaWidth,
  qnaInactivate,
  onClick,
  onClose,
}) {
  const cx = classNames.bind(styles);
  const cssQnaBtn = qnaBtn;

  const handleButtonClick = async () => {
    onClick && await onClick();
    onClose && onClose();
  };

  return (
    <>
      <button
        className={cx("qnaBtn", cssQnaBtn, qnaWidth, qnaInactivate, {
          noArrow: !cssQnaBtn,
        })}
        onClick={handleButtonClick}
      >
        <span>{text}</span>
        {cssQnaBtn && <ArrowNext className={cx("arrowNext")} />}
      </button>
    </>
  );
}
