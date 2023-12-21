// // Pagenation.jsx
import React from "react";
import styles from "./Pagenation.module.css";
import { useState } from "react";

const Pagenation = ({ data, limit, setOffset, offset }) => {
  const { count } = data || {};
  const totalPage = Math.ceil(count / limit);
  const [currentPage, setCurrentPage] = useState(1);

  const handleButtonClick = (i) => {
    setCurrentPage(i);
    setOffset((i - 1) * limit);
  };

  const buttons = [];
  for (let i = 1; i <= totalPage; i++) {
    buttons.push(
      <button
        key={i}
        className={`${styles.pageItem} ${
          i === currentPage ? styles.currentPage : ""
        }`}
        onClick={() => handleButtonClick(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className={styles.pagenation}>
      <button
        className={`${styles.pageItem} ${styles.prePage}`}
        disabled={currentPage === 1}
        onClick={() => {
          setCurrentPage(currentPage - 1);
          setOffset(offset - limit);
        }}
      >
        &lt;
      </button>
      {buttons}
      <button
        className={`${styles.pageItem} ${styles.nextPage}`}
        disabled={currentPage === totalPage}
        onClick={() => {
          setCurrentPage(currentPage + 1);
          setOffset(offset + limit); // 다음 페이지로 이동할 때 offset 증가
        }}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagenation;
