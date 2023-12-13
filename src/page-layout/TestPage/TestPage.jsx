import { Link } from "react-router-dom";
import ButtonBox from "../../ui/ButtonBox/ButtonBox";
import InputTextarea from "../../ui/InputTextarea/InputTextarea";

export const TestPage = () => {
  return (
    <>
      <Link to="/">MainPage 가는 링크</Link>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <ButtonBox text={"안녕"} qnaBtn="answerBtn" />
      <InputTextarea />
    </>
  );
};
