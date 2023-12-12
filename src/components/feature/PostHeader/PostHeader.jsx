import styles from "./PostHeader.module.css";
import classNames from "classnames/bind";

export default function PostHeader() {
  const cx = classNames.bind(styles);
  // <button className={cx("qnaBtn", { cssQnaBtn }, { qnaWidth })}>
  return (
    <>
      <div className={cx("header")}>
        <div className={cx("header-img")} />
        <div>
          <img src="assets/temp-profile.png" alt="ProfileImg" />
        </div>
        <h2>아초는고양이</h2>
      </div>
    </>
  );
}
