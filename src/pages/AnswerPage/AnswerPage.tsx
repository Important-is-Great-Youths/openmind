import BasePostLayout from "../../layout/BasePostLayout";
import AskListWrap from "../../components/ui/AskListWrap/AskListWrap";
import { useLocation, useParams } from "react-router";
import AskEmptyPage from "../AskEmptyPage/AskEmptyPage";
import { useEffect, useRef, useState } from "react";
import { getSubjectsQuestion } from "../../data-access/subjects/getSubjectsQuestion";
import { useDeleteQuestion } from "../../data-access/questions/useDeleteQuestion";
import FeedAnswerCard from "../../components/ui/FeedAnswerCard/FeedAnswerCard";
import ButtonFloating from "../../components/ui/ButtonFloating/ButtonFloating";
import styles from "./AnswerPage.module.scss";
import classNames from "classnames/bind";
import React from "react";

const cx = classNames.bind(styles);
const LIMIT = 100;

export const AnswerPage = () => {
  const { id } = useParams();
  const [isAskFeedPageVisible, setIsAskFeedPageVisible] =
    useState<boolean>(false);
  const location = useLocation();
  const offset = useRef(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(null);
  const [questionData, setQuestionData] = useState({
    data: [],
  });
  const [askFeed, setAskFeed] = useState<boolean>(true);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isDeleteId, setIsDeleteId] = useState<number>();

  const { deleteQuestion } = useDeleteQuestion();

  const handleFeedCardSection = async (
    id: number,
    limit: number,
    offset: number
  ) => {
    setIsLoading(true);
    try {
      const result = await getSubjectsQuestion(id, limit, offset);
      const { count, results: questionData } = result;
      setQuestionData((prevData) => ({
        data: [...questionData],
      }));
      setTotal(count);
    } catch (err) {
      console.log(err);
    } finally {
      offset += limit;
      setIsLoading(false);
    }
  };

  const handleDeleteAll = () => {
    questionData.data.map((results) => {
      deleteQuestion(results.id);
    });
  };

  useEffect(() => {
    handleFeedCardSection(Number(id), LIMIT, Number(offset));
  }, [location, isDelete, isDeleteId, isAskFeedPageVisible]);

  return (
    <>
      <BasePostLayout id={Number(id)}>
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
                  onSetIsDelete={setIsDelete} // isDelete 상태 변경 함수 전달
                  onSetIsDeleteId={setIsDeleteId}
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
