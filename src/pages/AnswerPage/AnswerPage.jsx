import BasePostLayout from "../../layout/BasePostLayout";
import AskListWrap from "../../components/ui/AskListWrap/AskListWrap";
import { useLocation, useParams } from "react-router";
import AskEmptyPage from "../AskEmptyPage/AskEmptyPage";
import { useEffect, useRef, useState } from "react";
import { getSubjectsQuestion } from "../../data-access/subjects/getSubjectsQuestion";
import FeedAnswerCard from "../../components/ui/FeedAnswerCard/FeedAnswerCard";

const LIMIT = 5;

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
    console.log(questionData); // 나중에 지울 예정
  };

  useEffect(() => {
    handleFeedCardSection(id, LIMIT, offset);
  }, [location]);

  return (
    <>
      <BasePostLayout
        isButton
        isAskFeedPageVisible={isAskFeedPageVisible}
        setIsAskFeedPageVisible={setIsAskFeedPageVisible}
        id={id}
      >
        {questionData.data && questionData.data.length > 0 ? (
          <AskListWrap title={`${total}개의 질문이 있습니다`}>
            {questionData.data.map((results) => {
              return (
                <FeedAnswerCard
                  askFeed={askFeed}
                  key={results.id}
                  data={results}
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
