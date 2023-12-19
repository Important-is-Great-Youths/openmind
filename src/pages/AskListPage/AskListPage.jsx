import { Link } from "react-router-dom";
import ButtonBox from "../../components/ui/ButtonBox/ButtonBox";
import Dropdown from "../../components/ui/Dropdown/Dropdown";
import styles from "./AskListPage.module.css";
import classNames from "classnames/bind";
import Usercard from "../../components/ui/Usercard/Usercard";
import { useState, useEffect, useCallback } from "react";
// import { useGetSubjects } from "../../data-access/subjects/useGetSubjects";
import { axiosInstance } from "../../util/axiosInstance";
import Pagenation from "../../components/ui/Pagenation/Pagenation";
import Reaction from "../../components/ui/Reaction/Reaction";

const cx = classNames.bind(styles);

export const AskListPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [sortBy, setSortBy] = useState("최신순");
  const [currentPageData, setCurrentPageData] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(8);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axiosInstance.get("/subjects/");
        setData(response.data.results);
        setCurrentPageData(response.data.results); // 초기 데이터 설정
        setTotalCount(response.data.count);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 데이터 로그 확인
  // useEffect(() => {
  //   if (data) {
  //     console.log(data);
  //   }
  // }, [data]);

  // 추가: 정렬 기준이 변경될 때마다 데이터 정렬
  useEffect(() => {
    if (data && sortBy === "이름순") {
      let copy = [...data];
      copy.sort((a, b) =>
        a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
      );
      setCurrentPageData(copy);
    } else if (data && sortBy === "최신순") {
      let dateCopy = [...data];
      dateCopy.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setCurrentPageData(dateCopy);
    }
  }, [data, sortBy]);

  // 추가: 정렬 기준 변경 함수
  const handleSortChange = (option) => {
    setSortBy(option);
  };

  // 추가: 페이지 변경 함수
  const handlePageChange = async (newPageData, newPage, limit) => {
    setCurrentPageData(newPageData);

    try {
      setLoading(true);
      setError(null);

      // 추가: 페이지 변경에 따라 API 호출
      const response = await axiosInstance.get(
        `/subjects/?limit=${limit}&offset=${(newPage - 1) * limit}`
      );
      setData(response.data.results);
      setTotalCount(response.data.count);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // 추가: 화면 크기 변화에 따라 limit 값 동적으로 설정
  const handleLimitChange = useCallback(() => {
    if (!windowSize.width) return;
    if (windowSize.width >= 910) {
      setLimit(8);
    } else {
      setLimit(6);
    }
  }, [windowSize.width]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    } else {
      return () =>
        window.removeEventListener("resize", () => {
          return null;
        });
    }
  }, []);

  useEffect(() => {
    handleLimitChange();
  }, [handleLimitChange, windowSize.width]);

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
        <div>
          <Reaction />
        </div>
        <div className={cx("listWrap")}>
          <div className={cx("choiceHeader")}>
            <h1>누구에게 질문할까요?</h1>
            {/* 추가: Dropdown에 정렬 기준 변경 함수 전달 */}
            <Dropdown onSortChange={handleSortChange} />
          </div>
          <ul className={cx("list")}>
            {/* {loading && <p>Loading...</p>} -> 같이 렌더링되어가지고 usercard가 밑으로 튀어서 주석*/}
            {error && <p>Error: {error.message}</p>}
            {currentPageData &&
              currentPageData.map((user) => (
                <li className={cx("cards")} key={user.id}>
                  <Usercard data={user} />
                </li>
              ))}
          </ul>
        </div>
        <footer className={cx("pagenation")}>
          <Pagenation
            totalCount={totalCount} // 총 아이템 수
            limit={limit} // 페이지당 아이템 수
            onPageChange={handlePageChange} // 페이지 변경 시 호출되는 함수
          />
        </footer>
      </div>
    </div>
  );
};
