import stylesheet from "./InputTextarea.module.css";
import cs from "classnames/bind";
const cx = cs.bind(stylesheet);

const focusing = (e) => {
  // 필요한 작업을 수행
};

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
