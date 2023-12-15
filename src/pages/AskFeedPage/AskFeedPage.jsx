import { Link } from "react-router-dom";
import BasePostLayout from "../../layout/BasePostLayout";
import AskListWrap from "../../components/ui/AskListWrap/AskListWrap";
import FeedCard from "../../components/ui/FeedCard/FeedCard";

export const AskFeedPage = () => {
  return (
    <>
      <BasePostLayout>
        <h1>PostPage</h1>
        <h3>
          <Link to="/">MainPage가는 링크</Link>
        </h3>
        <AskListWrap title={"3개의 질문이 있습니다"}>
          <FeedCard />
        </AskListWrap>
      </BasePostLayout>
    </>
  );
};
