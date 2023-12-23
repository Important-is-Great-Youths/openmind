import styles from "./InputField.module.css";
import classNames from "classnames/bind";
import { ReactComponent as IconPerson } from "../../../icon/icon-person.svg";
import { useState } from "react";

const cx = classNames.bind(styles);

const InputField = ({ onInputChange, isAlert = false }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onInputChange(value);
  };

  return (
    <div className={cx("input-wrap")}>
      <input
        className={cx("input", {
          alert: isAlert,
        })}
        type="text"
        placeholder="이름을 입력하세요"
        value={inputValue}
        onChange={handleChange}
      />
      <IconPerson className={cx("icon")} />
    </div>
  );
};

export default InputField;
