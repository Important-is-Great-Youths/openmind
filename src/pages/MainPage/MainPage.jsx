import styles from "./MainPage.module.css";
import classNames from "classnames/bind";
import ButtonBox from "../../components/ui/ButtonBox/ButtonBox";
import InputField from "../../components/ui/InputField/InputField";
import { Link, useNavigate } from "react-router-dom";
import { usePostSubjects } from "../../data-access/subjects/usePostSubjects";
import { useState } from "react";

const cx = classNames.bind(styles);

export const MainPage = () => {
  const [name, setName] = useState("");
  const { postData, postSubjects } = usePostSubjects();

  const navigate = useNavigate();

  const handleInputChange = (value) => {
    setName(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postSubjects(name);
    if (postData && postData.id) {
      const { id } = postData;
      navigate(`/post/${id}`);
    } else {
      console.error("Invalid postData:", postData);
    }
  };

  return (
    <>
      <div className={cx("wrap")}>
        <Link
          to="/list"
          className={cx("question")}
          style={{ textDecoration: "none" }}
        >
          <ButtonBox text={"질문하러 가기"} qnaBtn="answerBtn" />
        </Link>
        <div className={cx("wrapInner")}>
          <div className={cx("imgBox")}>
            <img src="assets/main-logo.png" alt="오픈마인드 로고" />
          </div>
          <form className={cx("form")} onSubmit={handleSubmit}>
            <InputField
              className={cx("inputField")}
              onInputChange={handleInputChange}
            />
            <ButtonBox text={"질문받기"} qnaWidth="qnaWidth" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};
