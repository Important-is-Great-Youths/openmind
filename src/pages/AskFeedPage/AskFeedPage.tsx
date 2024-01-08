import BasePostLayout from "../../layout/BasePostLayout";
import AskListWrap from "../../components/ui/AskListWrap/AskListWrap";
import FeedCard from "../../components/ui/FeedCard/FeedCard";
import Modal from "../../components/ui/Modal/Modal";
import { useLocation, useParams } from "react-router";
import AskEmptyPage from "../AskEmptyPage/AskEmptyPage";
import { useEffect, useRef, useState } from "react";
import ButtonFloating from "../../components/ui/ButtonFloating/ButtonFloating";
import { getSubjectsQuestion } from "../../data-access/subjects/getSubjectsQuestion";
import styles from "./AskFeedPage.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const LIMIT = 99;

export const AskFeedPage = () => {
  const { id } = useParams();
  const [isAskFeedPageVisible, setIsAskFeedPageVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const offset = useRef(0);
  const [total, setTotal] = useState(null);
  const [questionData, setQuestionData] = useState({
    data: [],
  });

  const handleFeedCardSection = async (id, limit, offset) => {
    try {
      const result = await getSubjectsQuestion(id, limit, offset.current);
      const { count, results: questionData } = result;
      setQuestionData({
        data: [...questionData],
      });
      setTotal(count);
    } catch (err) {
      console.log(err);
    } finally {
      offset.current += limit;
    }
  };

  useEffect(() => {
    handleFeedCardSection(id, LIMIT, offset);
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
      <BasePostLayout
        isButton
        isAskFeedPageVisible={isAskFeedPageVisible}
        setIsAskFeedPageVisible={setIsAskFeedPageVisible}
        id={id}
      >
        {questionData.data && questionData.data.length > 0 ? (
          <AskListWrap title={`${total}개의 질문이 있습니다`}>
            {questionData.data.map((results) => {
              return <FeedCard key={results.id} data={results} />;
            })}
          </AskListWrap>
        ) : (
          <AskEmptyPage />
        )}
        <div className={cx("button")}>
          <ButtonFloating text={"질문 작성하기"} onClick={handleButtonClick} />
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
