import styles from "./FeedCard.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const FeedCard = () => {
  return (
    <ul className={cx("cardList")}>
      <li className={cx("cardWrap", "shadow-1")}>질문</li>
    </ul>
  );
};

export default FeedCard;
