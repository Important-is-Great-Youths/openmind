import styles from "./EditButton.module.css";
import classNames from "classnames/bind";
import { ReactComponent as IconEdit } from "../../../icon/icon-edit.svg";
import { useState } from "react";

const cx = classNames.bind(styles);

const EditButton = () => {
  const [selected, setSelected] = useState(false);

  const buttonClassName = cx("button", { selected });
  const handleButtonSelected = () => {
    setSelected(true);
  };
  return (
    <button className={buttonClassName} onClick={handleButtonSelected}>
      <div className={cx("buttonItem")}>
        <IconEdit className={cx("icon")} />
        <p>수정하기</p>
      </div>
    </button>
  );
};

export default EditButton;
