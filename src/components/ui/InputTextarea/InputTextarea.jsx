import stylesheet from "./InputTextarea.module.css";
import className from "classnames/bind";
const cx = cs.bind(stylesheet);

function InputTextarea() {
  return (
    <form className={cx("inputarea")}>
      <textarea
        className={cx("input")}
        placeholder="이름을 입력하세요"
        onFocus={focusing}
      />
    </form>
  );
}

export default InputTextarea;
