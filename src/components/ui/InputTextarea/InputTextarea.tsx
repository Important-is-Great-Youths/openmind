import stylesheet from "./InputTextarea.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(stylesheet);

export default function InputTextarea({ text, value, onChange }) {
  return (
    <form className={cx("inputarea")}>
      <textarea
        cols="70"
        rows="7"
        className={cx("input")}
        placeholder={text}
        value={value}
        onChange={onChange}
      />
    </form>
  );
}
