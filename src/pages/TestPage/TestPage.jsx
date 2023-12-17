import { Link } from "react-router-dom";
import Badge from "../../components/ui/Badge/Badge";
import Usercard from "../../components/ui/Usercard/Usercard";

export const TestPage = () => {
  return (
    <>

        <Badge/>
        <Badge Completed/>
        <Usercard/>
    </>
  );
};
