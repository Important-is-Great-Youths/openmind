import React from "react";
import styles from "./AskListWrap.module.css";
import classNames from "classnames/bind";
import { ReactComponent as IconMessages } from "../../../icon/icon-messages.svg";

const cx = classNames.bind(styles);

const AskListWrap = ({ children, title }) => {
  const hasChildren = React.Children.count(children) === 0;

  const askListWrapHeight = {
    height: hasChildren && "330px",
    background:
      hasChildren &&
      'var(--brown-10) url("/assets/empty-state.png") no-repeat center 100px/150px',
  };

  return (
    <div className={cx("askListWrap")} style={askListWrapHeight}>
      <p className={cx("titleWrap")}>
        <IconMessages className={cx("icon")} />
        <span
          style={{ color: "var(--brown-40)" }}
          className={cx("body-1-regular")}
        >
          {title}
        </span>
      </p>
      <div className={cx("childrenWrap")}>{children}</div>
    </div>
  );
};

export default AskListWrap;
