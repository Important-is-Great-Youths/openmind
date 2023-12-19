import stylesheet from "./InputTextarea.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(stylesheet);

export default function InputTextarea({ value, onChange }) {
  return (
    <form className={cx("inputarea")}>
      <textarea
        className={cx("input")}
        placeholder="이름을 입력하세요"
        onChange={onChange}
        value={value}
      />
    </form>
  );
}
