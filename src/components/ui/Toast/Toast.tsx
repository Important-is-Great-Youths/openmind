import stylesheet from "./Toast.module.scss";
import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";

export default function Toast() {
  const cx = classNames.bind(stylesheet);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);
  return isVisible ? (
    <span className={cx("toast")}>URL이 복사되었습니다</span>
  ) : null;
}
