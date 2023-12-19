// // Pagenation.jsx
import React from "react";
import styles from "./Pagenation.module.css";
import { axiosInstance } from "../../../util/axiosInstance";
import { useState, useEffect } from "react";

const Pagenation = ({ totalCount, limit, onPageChange }) => {
  const totalPage = Math.ceil(totalCount / limit);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `/subjects/?limit=${limit}&offset=${offset}`
        );

        // https://openmind-api.vercel.app/2-3/subjects/?offset=32
        // 데이터를 가져온 후, 상위 컴포넌트에 현재 페이지를 전달합니다.
        onPageChange(response.data.results, currentPage, limit);
      } catch (error) {
        console.error("오류가 발생했습니다.");
      }
    };

    fetchData();
  }, [offset, currentPage]);
  // currentPage, onPageChange,

  const buttons = [];
  for (let i = 1; i <= totalPage; i++) {
    buttons.push(
      <button
        key={i}
        className={`${styles.pageItem} ${
          i === currentPage ? styles.currentPage : ""
        }`}
        onClick={() => setCurrentPage(i)}
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
