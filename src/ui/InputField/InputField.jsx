import styles from "./InputField.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

const InputField = () => {
  return (
    <div className={cx("tempStyle")}>
      <input type="text" />
    </div>
  );
};

export default InputField;
