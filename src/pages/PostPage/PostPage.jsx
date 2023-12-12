// import styles from "./PostPage.module.css";
// import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { HeaderLayout } from "../../layout/HeaderLayout";

export const PostPage = () => {
  // const cx = classNames.bind(styles);
  return (
    <>
      <HeaderLayout>
        <h1>PostPage</h1>
        <h3>
          <Link to="./">MainPage가는 링크</Link>
        </h3>
      </HeaderLayout>
    </>
  );
};
