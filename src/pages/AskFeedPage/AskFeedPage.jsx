import BasePostLayout from "../../layout/BasePostLayout";
import AskListWrap from "../../components/ui/AskListWrap/AskListWrap";
import FeedCard from "../../components/ui/FeedCard/FeedCard";
// import { useGetSubjects } from "../../data-access/subjects/useGetSubjects";
import Modal from "../../components/ui/Modal/Modal";

export const AskFeedPage = () => {
  // const { data } = useGetSubjects();
  // console.log(data)
  // console.log(data1)
  return (
    <>
      <BasePostLayout>
        <Modal />
        <AskListWrap title={"3개의 질문이 있습니다"}>
          <FeedCard askFeed />
        </AskListWrap>
      </BasePostLayout>
    </>
  );
};