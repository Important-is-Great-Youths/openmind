import AskListWrap from "../../components/ui/AskListWrap/AskListWrap";
import FeedCard from "../../components/ui/FeedCard/FeedCard";
import BaseAskLayout from "../../layout/BaseAskLayout";

const AskFeedPage = () => {
  return (
    <BaseAskLayout>
      <AskListWrap title={"3개의 질문이 있습니다"} >
        <FeedCard/>
      </AskListWrap>
    </BaseAskLayout>
  );
};

export default AskFeedPage;
