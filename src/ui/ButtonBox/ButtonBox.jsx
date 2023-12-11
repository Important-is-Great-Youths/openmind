import styles from "./ButtonBox.module.css";
import { ReactComponent as ArrowRight2 } from "../../icon/icon-arrow-right2.svg";
import classNames from "classnames/bind";

export default function ButtonBox({ text, qnaBtn, qnaWidth }) {
  // const [isLoading, setIsLoading] = useState(false);
  const cx = classNames.bind(styles);
  const cssQnaBtn = qnaBtn;
  return (
    <>
      <button className={cx("qnaBtn", { cssQnaBtn }, { qnaWidth })}>
        <span>{text}</span>
        <ArrowRight2 className={cx("arrowRight2")} />
      </button>
    </>
  );
}
