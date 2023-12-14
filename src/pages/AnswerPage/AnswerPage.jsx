import BasePostLayout from "../../layout/BasePostLayout";
import AskListWrap from "../../components/ui/AskListWrap/AskListWrap";
import FeedCard from "../../components/ui/FeedCard/FeedCard";

export const AnswerPage = () => {
  return (
    <>
      <BasePostLayout>
        <AskListWrap title={"3개의 질문이 있습니다"}>
          <FeedCard />
        </AskListWrap>
      </BasePostLayout>
    </>
  );
};
