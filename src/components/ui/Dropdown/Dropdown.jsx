import { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.module.css";
import classNames from "classnames/bind";
import { ReactComponent as IconArrowDown } from "../../../icon/icon-arrow-down.svg";
import { axiosInstance } from "../../../util/axiosInstance";

// import {}

const cx = classNames.bind(styles);

function Dropdown({ onSortChange }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("이름순");
  const dropdownRef = useRef(null);

  const [order, setOrder] = useState("createdAt");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axiosInstance.get("/subjects/");
        setData(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);

    onSortChange(option);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
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
}

export default Dropdown;
