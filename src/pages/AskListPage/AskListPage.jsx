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

  // 페이지 네이션을 위한 상태
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  // 현재 페이지의 데이터 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 시 실행될 함수
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            <Dropdown />
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
            itemsPerPage={itemsPerPage}
            totalItems={data?.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </footer>
      </div>
    </div>
  );
};
