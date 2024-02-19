import React, { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.module.scss";
import classNames from "classnames/bind";
import { ReactComponent as IconArrowDown } from "../../../icon/icon-arrow-down.svg";

const cx = classNames.bind(styles);

interface DropdownProps {
  onSortChange: (value: string) => void;
}

function Dropdown({ onSortChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [selectedOption, setSelectedOption] = useState("최신순");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (option: string) => {
    setSelectedOption(option === "name" ? "이름순" : "최신순");

    setIsOpen(false);

    onSortChange(option);
  };

  const handleClickOutside: any = (e: React.MouseEvent<MouseEvent>) => {
    if (
      dropdownRef.current &&
      e.target instanceof Node &&
      !dropdownRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  };
  
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={cx("container")} ref={dropdownRef}>
      <button className={cx("button")} onClick={toggleDropdown}>
        {selectedOption}
        <IconArrowDown />
      </button>
      {isOpen && (
        <ul className={cx("list")}>
          <li className={cx("item")} onClick={() => handleItemClick("time")}>
            최신순
          </li>
          <li className={cx("item")} onClick={() => handleItemClick("name")}>
            이름순
          </li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
