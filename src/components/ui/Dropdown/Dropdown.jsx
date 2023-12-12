import { useState, useRef } from "react";
import styles from "./Dropdown.module.css";
import classNames from "classnames/bind";
import { ReactComponent as IconArrowDown } from "../../../icon/icon-arrow-down.svg";

const cx = classNames.bind(styles);

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("이름순");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  document.addEventListener("click", handleClickOutside);

  return (
    <div className={cx("container")} ref={dropdownRef}>
      <button className={cx("button")} onClick={toggleDropdown}>
        {selectedOption}
        <IconArrowDown />
      </button>
      {isOpen && (
        <ul className={cx("list")}>
          <li className={cx("item")} onClick={() => handleItemClick("이름순")}>
            이름순
          </li>
          <li className={cx("item")} onClick={() => handleItemClick("최신순")}>
            최신순
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
