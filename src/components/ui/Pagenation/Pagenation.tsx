// // Pagenation.jsx
import React from "react";
import styles from "./Pagenation.module.scss";
import { useState } from "react";
import { subjectListInfo } from "../../../../types/SubjectTypes";

interface PagenationProps {
  data: subjectListInfo;
  limit: number;
  setOffset: (value: number) => void;
  offset: number;
}

const Pagenation = ({ data, limit, setOffset, offset }: PagenationProps) => {
  const { count } = data || {};
  const totalPage = Math.ceil(count / limit);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleButtonClick = (i: number) => {
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
