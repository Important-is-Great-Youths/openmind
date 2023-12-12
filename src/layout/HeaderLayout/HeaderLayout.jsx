import PostHeader from "../../components/feature/PostHeader/PostHeader";
import styles from "./HeaderLayout.module.css";
import classNames from "classnames/bind";

const HeaderLayout = ({ children }) => {
  const cx = classNames.bind(styles);
  return (
    <>
      <PostHeader />
      <main className={cx("main")}>{children}</main>
    </>
  );
};

export default HeaderLayout;
