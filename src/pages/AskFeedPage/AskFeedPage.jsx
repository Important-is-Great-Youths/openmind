import { Link } from "react-router-dom";
import BasePostLayout from "../../layout/BasePostLayout";
import AskListWrap from "../../components/ui/AskListWrap/AskListWrap";
import FeedCard from "../../components/ui/FeedCard/FeedCard";
// import { useGetSubjects } from "../../data-access/subjects/useGetSubjects";
import useTestPostSubjects from "../../data-access/answers/useTestPostSubjects";
import Modal from "../../components/ui/Modal/Modal";

export const AskFeedPage = () => {
  // const { data } = useGetSubjects();
  const { data1 } = useTestPostSubjects('1281');
  // console.log(data)
  // console.log(data1)
  return (
    <>
      <BasePostLayout>
        <Modal/>
        <AskListWrap title={"3개의 질문이 있습니다"}>
          <FeedCard askFeed />
        </AskListWrap>
      </BasePostLayout>
    </>
  );
};
