import { Link } from "react-router-dom";
import ButtonBox from "../../components/ui/ButtonBox/ButtonBox";
import Dropdown from "../../components/ui/Dropdown/Dropdown";
import styles from "./AskListPage.module.css";
import classNames from "classnames/bind";
import Usercard from "../../components/ui/Usercad/Usercard";
import { useState, useEffect } from "react";
// import { useGetSubjects } from "../../data-access/subjects/useGetSubjects";
import { axiosInstance } from "../../util/axiosInstance";

import Pagenation from "../../components/ui/Pagenation/Pagenation";

const cx = classNames.bind(styles);

export const AskListPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [sortBy, setSortBy] = useState("최신순");

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

  // 데이터 로그 확인
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  // 추가: 정렬 기준이 변경될 때마다 데이터 정렬
  useEffect(() => {
    if (data && sortBy === "이름순") {
      let copy = [...data];
      copy.sort((a, b) =>
        a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
      );
      setData(copy);
    } else if (data && sortBy === "최신순") {
      let dateCopy = [...data];
      dateCopy.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setData(dateCopy);
    }
  }, [data, sortBy]);

  // 추가: 정렬 기준 변경 함수
  const handleSortChange = (option) => {
    setSortBy(option);
  };

  return (
    <div className={cx("wrap")}>
      <div className={cx("wrapInner")}>
        <div className={cx("nav")}>
          <Link to="/">
            <div className={cx("imgWrap")}>
              <img src="assets/main-logo.png" alt="로고" />
            </div>
          </Link>
          <ButtonBox text={"답변하러 가기"} qnaBtn="answerBtn" />
        </div>

        <div className={cx("listWrap")}>
          <div className={cx("choiceHeader")}>
            <h1>누구에게 질문할까요?</h1>
            {/* 추가: Dropdown에 정렬 기준 변경 함수 전달 */}
            <Dropdown onSortChange={handleSortChange} />
          </div>
          <ul className={cx("list")}>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data &&
              data.map((user) => (
                <li className={cx("cards")} key={user.id}>
                  <Usercard data={user} />
                </li>
              ))}
          </ul>
        </div>
        <footer className={cx("pagenation")}>
          <Pagenation
            totalCount={totalCount}
            limit={limit}
            onPageChange={handlePageChange}
          />
        </footer>
      </div>
    </div>
  );
};
