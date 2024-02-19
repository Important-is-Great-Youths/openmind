import styles from "./LoadingIcon.module.scss";
import classNames from "classnames/bind";
import { ReactComponent as LoadIcon } from "../../../icon/icon-loading.svg";
import React from "react";

const cx = classNames.bind(styles);

export default function LoadingIcon() {
  return (
    <div className={cx("background")}>
      <div className="loadWrap">
        <LoadIcon />
      </div>
    </div>
  );
}
