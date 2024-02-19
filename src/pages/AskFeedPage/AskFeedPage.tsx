import React from "react";
import BasePostLayout from "../../layout/BasePostLayout";
import AskListWrap from "../../components/ui/AskListWrap/AskListWrap";
import FeedCard from "../../components/ui/FeedCard/FeedCard";
import Modal from "../../components/ui/Modal/Modal";
import { useLocation, useParams } from "react-router";
import AskEmptyPage from "../AskEmptyPage/AskEmptyPage";
import { useEffect, useRef, useState } from "react";
import ButtonFloating from "../../components/ui/ButtonFloating/ButtonFloating";
import { getSubjectsQuestion } from "../../data-access/subjects/getSubjectsQuestion";
import styles from "./AskFeedPage.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const LIMIT = 99;

export const AskFeedPage = () => {
  const { id } = useParams();
  const [isAskFeedPageVisible, setIsAskFeedPageVisible] =
    useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const location = useLocation();
  const offset = useRef(0);
  const [total, setTotal] = useState<number>(null);
  const [questionData, setQuestionData] = useState({
    data: [],
  });

  const handleFeedCardSection = async (
    id: number,
    limit: number,
    offset: number
  ) => {
    try {
      const result = await getSubjectsQuestion(id, limit, offset);
      const { count, results: questionData } = result;
      setQuestionData({
        data: [...questionData],
      });
      setTotal(count);
    } catch (err) {
      console.log(err);
    } finally {
      offset += limit;
    }
  };

  useEffect(() => {
    handleFeedCardSection(Number(id), LIMIT, Number(offset));
  }, [location, isModalOpen]);

  const handleButtonClick = async () => {
    setIsModalOpen(true);
    setIsAskFeedPageVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsAskFeedPageVisible(false);
  };

  return (
    <div>
      <BasePostLayout id={Number(id)}>
        {questionData.data && questionData.data.length > 0 ? (
          <AskListWrap title={`${total}개의 질문이 있습니다`}>
            {questionData.data.map((results) => {
              return <FeedCard key={results.id} data={results} askFeed={false} />;
            })}
          </AskListWrap>
        ) : (
          <AskEmptyPage />
        )}
        <div className={cx("button")}>
          <ButtonFloating text={"질문 작성하기"} onClick={handleButtonClick} small="" />
        </div>
        {isModalOpen && (
          <Modal
            onClose={handleCloseModal}
            setQuestionData={setQuestionData}
            questionData={questionData}
            setTotal={setTotal}
          />
        )}
      </BasePostLayout>
    </div>
  );
};
