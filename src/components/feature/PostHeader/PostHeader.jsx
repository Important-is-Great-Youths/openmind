import styles from "./PostHeader.module.css";
import classNames from "classnames/bind";
import ButtonShare from "../../ui/ButtonShare/ButtonShare";

export default function PostHeader() {
  const cx = classNames.bind(styles);
  return (
    <>
      <div className={cx("header")}>
        <div className={cx("header-img")} />
        <img
          className={cx("logo")}
          src="assets/main-logo.png"
          alt="OpenmindLogo"
        />
        <img
          className={cx("profile-photo")}
          src="assets/temp-profile.png"
          alt="ProfileImg"
        />
        <h2 className={cx("username")}>아초는고양이</h2>
        <ButtonShare />
      </div>
    </>
  );
}
