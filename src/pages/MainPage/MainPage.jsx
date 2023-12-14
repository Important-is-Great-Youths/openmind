import styles from "./MainPage.module.css";
import classNames from "classnames/bind";
import ButtonBox from "../../components/ui/ButtonBox/ButtonBox";
import InputField from "../../components/ui/InputField/InputField";
import { Link } from "react-router-dom";


export const MainPage = () => {
  const cx = classNames.bind(styles);

  return (
    <>
      <div className={cx("wrap")}>
        <Link
          to="/list"
          className={cx("question")}
          style={{ textDecoration: "none" }}
        >
          <ButtonBox text={"질문하러 가기"} qnaBtn="answerBtn" />
        </Link>
        <div className={cx("wrapInner")}>
          <div className={cx("imgBox")}>
            <img src="assets/main-logo.png" alt="오픈마인드 로고" />
          </div>
          <div className={cx("inputName")}>
            <InputField className={cx("inputField")} />
            <ButtonBox text={"질문받기"} qnaWidth="qnaWidth" />
          </div>
        </div>
      </div>
    </>
  );
};
