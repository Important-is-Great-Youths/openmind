import styles from "./EditButton.module.css";
import classNames from "classnames/bind";
import { ReactComponent as IconEdit } from "../../../icon/icon-edit.svg";

const cx = classNames.bind(styles);

const EditButton = () => {
  return (
    <button className={cx("button")}>
      <IconEdit className={cx("icon")} />
      수정하기
    </button>
  );
};

export default EditButton;
