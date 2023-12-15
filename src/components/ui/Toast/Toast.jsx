import stylesheet from "./Toast.module.css";
import classNames from "classnames/bind";

export default function Toast() {
  const cx = classNames.bind(stylesheet);
  return <span className={cx("toast")}>URL이 복사되었습니다</span>;
}
