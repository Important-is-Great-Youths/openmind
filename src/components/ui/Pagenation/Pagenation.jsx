// Pagenation.jsx

import React from "react";
import styles from "./Pagenation.module.css";

const Pagenation = ({ totalCount, limit }) => {
  const totalPage = Math.ceil(totalCount / limit);
  const currentPage = 1;
  const pageCount = 5;

  let pageGroup = Math.ceil(currentPage / pageCount);
  let lastNumber = pageGroup * pageCount;
  if (lastNumber > totalPage) {
    lastNumber = totalPage;
  }
  let firstNumber = lastNumber - (pageCount - 1);

  const next = lastNumber + 1;
  const prev = firstNumber - 1;

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
