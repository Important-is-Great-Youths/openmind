import { Link } from "react-router-dom";
import ButtonBox from "../../components/ui/ButtonBox/ButtonBox";
import Dropdown from "../../components/ui/Dropdown/Dropdown";
import styles from "./AskListPage.module.css";
import classNames from "classnames/bind";
import Usercard from "../../components/ui/Usercard/Usercard";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../util/axiosInstance";
import Pagenation from "../../components/ui/Pagenation/Pagenation";
import LoadingIcon from "../../components/ui/LoadingIcon/LoadingIcon";

const cx = classNames.bind(styles);

export const AskListPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [currentPageData, setCurrentPageData] = useState(null);
  const [limit, setLimit] = useState(8);
  const [offset, setOffset] = useState(0);
  const [sortBy, setSortBy] = useState(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [hasResized, setHasResized] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axiosInstance.get(
          `/subjects/?limit=${limit}&offset=${offset}&sort=${sortBy}`
        );
        setData(response.data);
        setCurrentPageData(response.data.results); // 초기 데이터 설정
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [limit, sortBy, offset]);

  // 화면 크기가 변경될 때 limit 변경 함수
  const handleResize = () => {
    const currentWidth = window.innerWidth;

    // 이전에 저장된 너비
    const prevWidth = windowSize;

    // 기준값 (예: 910)
    const breakpoint = 910;

    // 너비가 기준값을 넘어서거나 미만으로 변경되었을 때만 setWindowSize 호출
    if (
      !hasResized &&
      ((prevWidth > breakpoint && currentWidth <= breakpoint) ||
        (prevWidth <= breakpoint && currentWidth > breakpoint))
    ) {
      setWindowSize(currentWidth);
      setHasResized(true);
      if (prevWidth > breakpoint && currentWidth <= breakpoint) {
        setLimit(6);
      } else {
        setLimit(8);
      }
    } else {
      setHasResized(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [hasResized]);

  // 추가: 정렬 기준 변경 함수
  const handleSortChange = (option) => {
    setSortBy(option);
  };

  return (
    <div className={cx("wrap")}>
      <div className={cx("wrapInner")}>
        {loading && <LoadingIcon />}
        <div className={cx("nav")}>
          <Link to="/">
            <div className={cx("imgWrap")}>
              <img src="assets/main-logo.png" alt="오픈마인드 로고" />
            </div>
          </Link>
          <Link to="/">
            <ButtonBox text={"답변하러 가기"} qnaBtn="answerBtn" />
          </Link>
        </div>
        <div className={cx("listWrap")}>
          <div className={cx("choiceHeader")}>
            <h1>누구에게 질문할까요?</h1>
            {/* 추가: Dropdown에 정렬 기준 변경 함수 전달 */}
            <Dropdown onSortChange={handleSortChange} />
          </div>
          <ul className={cx("list")}>
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
            data={data}
            limit={limit} // 페이지당 아이템 수
            setOffset={setOffset}
            offset={offset}
          />
        </footer>
      </div>
    </div>
  );
};
