import { Link } from "react-router-dom";
import ButtonBox from "../../components/ui/ButtonBox/ButtonBox";
import PostHeader from "../../components/feature/PostHeader/PostHeader";
import Badge from "../../components/ui/Badge/Badge"
import Usercard from "../../components/ui/Usercad/Usercard"
export const TestPage = () => {
  return (
    <>
        <Usercard />
        <Badge Completed/>
        <Badge />
    </>
  );
};
