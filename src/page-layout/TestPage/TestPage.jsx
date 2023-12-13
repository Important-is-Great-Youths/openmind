import { Link } from "react-router-dom";
import { Reaction } from "../../ui/Reaction";
export const TestPage = () => {
  return (
    <>
      <Link to="/">MainPage 가는 링크</Link>
      <Reaction />
    </>
  );
};
