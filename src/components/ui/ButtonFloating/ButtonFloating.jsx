import styles from "./ButtonFloating.module.css";
import classNames from "classnames/bind";

/* 
  삭제하기(작은 사이즈의 버튼)을 쓸때 
  <ButtonFloating text={"삭제하기"} small="small" />
*/
export default function ButtonFloating({ text, small, onClick }) {
  const cx = classNames.bind(styles);
  return (
    <>
      <button className={cx("btn", small)} onClick={onClick}>
        {text}
      </button>
    </>
  );
}
