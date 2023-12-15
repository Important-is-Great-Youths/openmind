import styles from "./Modal.module.css";
import classNames from "classnames/bind";
import { ReactComponent as IconMessages } from "../../../icon/icon-messages.svg";
import { ReactComponent as IconClose } from "../../../icon/icon-close.svg";
import InputTextarea from "../InputTextarea/InputTextarea";
import ButtonBox from "../ButtonBox/ButtonBox";

const cx = classNames.bind(styles);

const Modal = () => {
  return (
    <div className={cx("container", "shadow-3")}>
      <div className={cx("titleWrap")}>
        <div className={cx("title")}>
          <IconMessages className={cx("iconMessages")} />
          <span>질문을 작성하세요</span>
        </div>
        <button className={cx("closeButton")}>
          <IconClose className={cx("iconClose")} />
        </button>
      </div>
      <div className={cx("userInfoWrap")}>
        <span className={cx("body-2-regular")}>To.</span>
        <img
          className={cx("userImage")}
          src="assets/temp-profile.png"
          alt="프로필"
        />
        <span className={cx("body-3-regular")}>아초는 고양이</span>
      </div>
      <div className={cx("formWrap")}>
        <InputTextarea />
        <ButtonBox
          text={"질문 보내기"}
          qnaInactivate="qnaInactivate"
          qnaWidth="qnaWidth"
        />
      </div>
    </div>
  );
};

export default Modal;
