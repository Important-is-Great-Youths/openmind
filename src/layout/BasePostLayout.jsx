import PostHeader from "../components/feature/PostHeader/PostHeader";
import classNames from "classnames/bind";
import styles from "./BasePostLayout.module.css";
import ButtonFloating from "../components/ui/ButtonFloating/ButtonFloating";

const cx = classNames.bind(styles);

const BasePostLayout = ({ children }) => {
  return (
    <>
      <PostHeader />
      <main className={cx("main")}>
        {children}
        <div className={cx("button")}>
          <ButtonFloating className={cx("button")} text={"질문 작성하기"} />
        </div>
      </main>
    </>
  );
};

export default BasePostLayout;
