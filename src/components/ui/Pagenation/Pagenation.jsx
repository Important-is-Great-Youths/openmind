// Pagenation.jsx

import React from "react";
import styles from "./Pagenation.module.css";
import { axiosInstance } from "../../../util/axiosInstance";
import { useState, useEffect } from "react";
const Pagenation = ({ totalCount, limit }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(null);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  const totalPage = Math.ceil(totalCount / limit);
  const currentPage = 1;
  const pageCount = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axiosInstance.get("/subjects/");
        setCount(response.data.count);
        setNext(response.data.next);
        setPrev(response.data.previous);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // console.log([...data].count);

  // // 데이터 로그 확인
  // useEffect(() => {
  //   if (data) {
  //     console.log(data);
  //   }
  // }, [data]);

  let pageGroup = Math.ceil(currentPage / pageCount);
  let lastNumber = pageGroup * pageCount;
  if (lastNumber > totalPage) {
    lastNumber = totalPage;
  }
  let firstNumber = lastNumber - (pageCount - 1);

  // const next = lastNumber + 1;
  // const prev = firstNumber - 1;

  const buttons = [];
  for (let i = firstNumber; i <= lastNumber; i++) {
    buttons.push(
      <button
        key={i}
        className={`${styles.pageItem} ${
          i === currentPage ? styles.currentPage : ""
        }`}
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
        onClick={() => console.log("Go to Previous Page")}
      >
        &lt;
      </button>
      {buttons}
      <button
        className={`${styles.pageItem} ${styles.nextPage}`}
        disabled={currentPage === totalPage}
        onClick={() => console.log("Go to Next Page")}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagenation;
