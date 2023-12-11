import { Link } from "react-router-dom";
import ButtonBox from "../../ui/ButtonBox/ButtonBox";

export const TestPage = () => {
  return (
    <>
      <Link to="/">MainPage 가는 링크</Link>
      <ButtonBox text={"안녕"} qnaBtn="answerBtn" />
    </>
  );
};
