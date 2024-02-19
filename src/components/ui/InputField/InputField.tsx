import React from "react";
import styles from "./InputField.module.scss";
import classNames from "classnames/bind";
import { ReactComponent as IconPerson } from "../../../icon/icon-person.svg";
import { useState } from "react";

const cx = classNames.bind(styles);

interface InputFieldProps {
  className: string;
  onInputChange: (value: string) => void;
  isAlert: boolean;
}

const InputField = ({
  className,
  onInputChange,
  isAlert = false,
}: InputFieldProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);
    onInputChange(value);
  };

  return (
    <div className={cx("input-wrap") + className}>
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
