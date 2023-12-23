import styles from "./MainPage.module.css";
import classNames from "classnames/bind";
import ButtonBox from "../../components/ui/ButtonBox/ButtonBox";
import InputField from "../../components/ui/InputField/InputField";
import { Link, useNavigate } from "react-router-dom";
import { usePostSubjects } from "../../data-access/subjects/usePostSubjects";
import { useSearchSubject } from "../../util/useSearchSubject";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

export const MainPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const { postData, postSubjects } = usePostSubjects();
  const { searchSubject } = useSearchSubject();
  const [alert, setAlert] = useState(false);

  const searchSubjectResult = searchSubject(name);

  const handleInputChange = (value) => {
    setName(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    } else {
      if (searchSubjectResult === -1) {
        try {
          await postSubjects(name);
        } catch (error) {
          console.error("Error posting data:", error);
        }
      } else {
        navigate(`/post/${searchSubjectResult}/answer`);
      }
    }
  };

  useEffect(() => {
    if (postData && postData.id) {
      const { id } = postData;
      navigate(`/post/${id}/answer`);
    } else {
      console.error("Invalid postData:", postData);
    }
  }, [postData]);

  return (
    <>
      <div className={cx("wrap")}>
        <div className={cx("buttonWrap")}>
          <Link
            to="/list"
            className={cx("question")}
            style={{ textDecoration: "none" }}
          >
            <ButtonBox text={"질문하러 가기"} qnaBtn="answerBtn" />
          </Link>
        </div>
        <div className={cx("wrapInner")}>
          <div className={cx("imgBox")}>
            <img src="assets/main-logo.png" alt="오픈마인드 로고" />
          </div>
          <form className={cx("form")} onSubmit={handleSubmit}>
            <InputField
              className={cx("inputField")}
              onInputChange={handleInputChange}
              isAlert={alert}
            />
            <ButtonBox text={"질문받기"} qnaWidth="qnaWidth" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};
