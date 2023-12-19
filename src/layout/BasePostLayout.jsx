import PostHeader from "../components/feature/PostHeader/PostHeader";
import classNames from "classnames/bind";
import styles from "./BasePostLayout.module.css";

const cx = classNames.bind(styles);

const BasePostLayout = ({ children, id }) => {
  return (
    <>
      <PostHeader id={id} />
      <main className={cx("main")}>{children}</main>
    </>
  );
};

export default BasePostLayout;
