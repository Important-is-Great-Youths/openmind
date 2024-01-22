import React, { ChangeEvent } from "react";
import stylesheet from "./InputTextarea.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(stylesheet);

interface InputTextareaProps {
  text?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputTextarea: React.FC<InputTextareaProps> = ({
  text,
  value,
  onChange,
}) => {
  return (
    <form className={cx("inputarea")}>
      <textarea
        cols={70}
        rows={7}
        className={cx("input")}
        placeholder={text}
        value={value}
        onChange={onChange}
      />
    </form>
  );
};

export default InputTextarea;
