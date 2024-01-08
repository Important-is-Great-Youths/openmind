import BasePostLayout from "../../layout/BasePostLayout";
import AskListWrap from "../../components/ui/AskListWrap/AskListWrap";
import { useLocation, useParams } from "react-router";
import AskEmptyPage from "../AskEmptyPage/AskEmptyPage";
import { useEffect, useRef, useState } from "react";
import { getSubjectsQuestion } from "../../data-access/subjects/getSubjectsQuestion";
import { useDeleteQuestion } from "../../data-access/questions/useDeleteQuestion";
import FeedAnswerCard from "../../components/ui/FeedAnswerCard/FeedAnswerCard";
import ButtonFloating from "../../components/ui/ButtonFloating/ButtonFloating";
import styles from "./AnswerPage.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const LIMIT = 100;

export const AnswerPage = () => {
  const { id } = useParams();
  const [isAskFeedPageVisible, setIsAskFeedPageVisible] = useState(false);
  const location = useLocation();
  const offset = useRef(0);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(null);
  const [questionData, setQuestionData] = useState({
    data: [],
  });
  const [askFeed, setAskFeed] = useState(true);
  const [isDelete, setIsDelete] = useState(false);
  const [isDeleteId, setIsDeleteId] = useState("");

  const { deleteQuestion } = useDeleteQuestion();

  const handleFeedCardSection = async (id, limit, offset) => {
    setIsLoading(true);
    try {
      const result = await getSubjectsQuestion(id, limit, offset.current);
      const { count, results: questionData } = result;
      setQuestionData((prevData) => ({
        data: [...questionData],
      }));
      setTotal(count);
    } catch (err) {
      console.log(err);
    } finally {
      offset.current += limit;
      setIsLoading(false);
    }
  };

  const handleDeleteAll = () => {
    questionData.data.map((results) => {
      deleteQuestion(results.id);
    });
  };

  useEffect(() => {
    handleFeedCardSection(id, LIMIT, offset);
  }, [location, isDelete, isDeleteId, isAskFeedPageVisible]);

  return (
    <>
      <BasePostLayout
        isButton
        isAskFeedPageVisible={isAskFeedPageVisible}
        setIsAskFeedPageVisible={setIsAskFeedPageVisible}
        id={id}
      >
        <div className={cx("deleteDiv")}>
          <div className={cx("deleteButton")}>
            <ButtonFloating
              text={"삭제하기"}
              small="small"
              onClick={handleDeleteAll}
            />
          </div>
        </div>

        {questionData.data && questionData.data.length > 0 ? (
          <AskListWrap title={`${total}개의 질문이 있습니다`}>
            {questionData.data.map((results) => {
              return (
                <FeedAnswerCard
                  askFeed={askFeed}
                  key={results.id}
                  data={results}
                  isDelete={isDelete} // isDelete 상태 전달
                  setIsDelete={setIsDelete} // isDelete 상태 변경 함수 전달
                  setIsDeleteId={setIsDeleteId}
                />
              );
            })}
          </AskListWrap>
        ) : (
          <AskEmptyPage />
        )}
      </BasePostLayout>
    </>
  );
};
