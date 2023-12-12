import styles from "./AskListWrap.module.css";
import classNames from "classnames/bind";
import { ReactComponent as IconMessages } from "../../../icon/icon-messages.svg";

const cx = classNames.bind(styles);

const AskListWrap = ({ children, title }) => {
  return (
    <div className={cx("askListWrap")}>
      <p className={cx("titleWrap")}>
        <IconMessages className={cx("icon")} />
        <span
          style={{ color: "var(--brown-40)" }}
          className={cx("body-1-regular")}
        >
          {title}
        </span>
      </p>
      {children}
    </div>
  );
};

export default AskListWrap;
