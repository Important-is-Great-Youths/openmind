import AskListWrap from "../../components/ui/AskListWrap/AskListWrap";
import BaseAskLayout from "../../layout/BaseAskLayout";

const AskEmptyPage = () => {
  return (
    <BaseAskLayout>
      <AskListWrap title={"아직 질문이 없습니다"} >
      </AskListWrap>
    </BaseAskLayout>
  );
}

export default AskEmptyPage