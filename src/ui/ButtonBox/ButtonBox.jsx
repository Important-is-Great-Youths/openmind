import styles from "./ButtonBox.module.css";
import { ReactComponent as ArrowRight2 } from "../../icon/icon-arrow-right2.svg";

export default function ButtonBox({ text, qnaBtn, qnaWidth }) {
  // const [isLoading, setIsLoading] = useState(false);

  const cssQnaBtn = qnaBtn;
  return (
    <>
      <button className={`${styles.qnaBtn} ${styles[cssQnaBtn]} ${styles[qnaWidth]}`}>
        <span>{text}</span>
        <ArrowRight2 className={styles.arrowRight2} />
      </button>
    </>
  );
}
