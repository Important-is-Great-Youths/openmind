import AskListWrap from "../../components/ui/AskListWrap/AskListWrap";
import BasePostLayout from "../../layout/BasePostLayout";

const AskEmptyPage = () => {
  return (
    <BasePostLayout>
      <AskListWrap title={"아직 질문이 없습니다"}></AskListWrap>
    </BasePostLayout>
  );
};

export default AskEmptyPage;
