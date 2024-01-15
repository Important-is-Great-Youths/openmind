import styles from "./ButtonFloating.module.scss";
import classNames from "classnames/bind";

/* 
  삭제하기(작은 사이즈의 버튼)을 쓸때 
  <ButtonFloating text={"삭제하기"} small="small" />
*/

interface Props {
  text: string;
  small?: "small" | undefined;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonFloating({ text, small, onClick }: Props) {
  const cx = classNames.bind(styles);
  return (
    <>
      <button className={cx("btn", small)} onClick={onClick}>
        {text}
      </button>
    </>
  );
}
