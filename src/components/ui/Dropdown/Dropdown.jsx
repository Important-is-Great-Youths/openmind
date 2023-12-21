import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dropdown.module.css";
import classNames from "classnames/bind";
import { ReactComponent as IconArrowDown } from "../../../icon/icon-arrow-down.svg";
import { axiosInstance } from "../../../util/axiosInstance";

const cx = classNames.bind(styles);

function Dropdown({ onSortChange }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [limit, setLimit] = useState(6);
  const [offset, setOffset] = useState(0);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  // const [sortTime, setSortTime] = useState("time");
  const [sortName, setSortName] = useState("");
  const [currentPageData, setCurrentPageData] = useState(null);
  const [selectedOption, setSelectedOption] = useState("최신순");
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axiosInstance.get(
          `/subjects/?limit=${limit}&offset=${offset}&sort=name`
        );
        setData(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   if (data && sortName === "name") {
  //     let copy = [...data];
  //     copy.sort((a, b) =>
  //       a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
  //     );
  //     setCurrentPageData(copy);
  //   } else if (data && sortTime === "time") {
  //     let dateCopy = [...data];
  //     dateCopy.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  //     setCurrentPageData(dateCopy);
  //   }
  // }, [data, sortName]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (option) => {
    setSelectedOption(option === "name" ? "이름순" : "최신순");
    // setSelectedOption("이름순");
    // navigate(
    //   option === "name"
    //     ? `/list/${Math.floor(offset / limit) + 1}/name`
    //     : `/list/${Math.floor(offset / limit) + 1}/time`
    // );
    setIsOpen(false);
    setSortName(option);
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
