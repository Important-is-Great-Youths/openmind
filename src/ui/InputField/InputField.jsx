import styles from "./InputField.module.css";
import classNames from "classnames/bind";
import { ReactComponent as IconPerson } from "../../icon/icon-person.svg";

const cx = classNames.bind(styles);

const InputField = () => {
  return (
    <div className={cx("input-wrap")}>
      <input className={cx("input")} type="text" placeholder="이름을 입력하세요" />
      <IconPerson className={cx("icon")} />
    </div>
  );
};

export default InputField;
