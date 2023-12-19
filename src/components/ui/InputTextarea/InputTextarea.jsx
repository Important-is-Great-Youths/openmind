import stylesheet from "./InputTextarea.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(stylesheet);

const focusing = (e) => {
  // 필요한 작업을 수행
};

export default function InputTextarea({ text, value, onChange }) {
  return (
   <form className={cx("inputarea")}>
    <textarea
      cols="70"
      rows="7"
      className={cx("input")}
      placeholder={text}
      onFocus={focusing}
      value={value}
      onChange={onChange}
    />
  </form>
  );
}
