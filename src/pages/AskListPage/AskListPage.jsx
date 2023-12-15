import { Link } from "react-router-dom";
import ButtonBox from "../../components/ui/ButtonBox/ButtonBox";
import Dropdown from "../../components/ui/Dropdown/Dropdown";
import styles from "./AskListPage.module.css";
import classNames from "classnames/bind";
import Usercard from "../../components/ui/Usercad/Usercard";

export const AskListPage = () => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wrap")}>
      <div className={cx("wrapInner")}>
        <div className={cx("nav")}>
          <Link to="/">
            <div className={cx("imgWrap")}>
              <img src="assets/main-logo.png" alt="로고" />
            </div>
          </Link>
          <ButtonBox text={"답변하러 가기"} qnaBtn="answerBtn" />
        </div>

        <div className={cx("listWrap")}>
          <div className={cx("choiceHeader")}>
            <h1>누구에게 질문할까요?</h1>
            <Dropdown />
          </div>
          <ul className={cx("list")}>
            <li className={cx("cards")}>
              <Usercard className={cx("card")} />
            </li>
            <li className={cx("cards")}>
              <Usercard className={cx("card")} />
            </li>
            <li className={cx("cards")}>
              <Usercard className={cx("card")} />
            </li>
            <li className={cx("cards")}>
              <Usercard className={cx("card")} />
            </li>
            <li className={cx("cards")}>
              <Usercard className={cx("card")} />
            </li>
            <li className={cx("cards")}>
              <Usercard className={cx("card")} />
            </li>
            <li className={cx("cards")}>
              <Usercard className={cx("card")} />
            </li>
            <li className={cx("cards")}>
              <Usercard className={cx("card")} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
