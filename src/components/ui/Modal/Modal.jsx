import styles from "./Modal.module.css";
import classNames from "classnames/bind";
import { ReactComponent as IconMessages } from "../../../icon/icon-messages.svg";
import { ReactComponent as IconClose } from "../../../icon/icon-close.svg";
import InputTextarea from "../InputTextarea/InputTextarea";
import ButtonBox from "../ButtonBox/ButtonBox";
import { useState } from "react";
import { useParams } from "react-router";
import { postSubjectsQuestion } from "../../../data-access/subjects/postSubjectsQuestion";
import { useGetSubject } from "../../../data-access/subjects/useGetSubject";

const cx = classNames.bind(styles);

const Modal = ({ onClose, setQuestionData, questionData, setTotal }) => {
  const { id } = useParams();
  const { data: subjectData } = useGetSubject(id);
  const { imageSource, name } = subjectData || {};
  const [textareaText, setTextareaText] = useState("");

  const handleButtonClick = async (e) => {
    try {
      const formData = JSON.stringify({ content: `${textareaText}` });
      const response = await postSubjectsQuestion(id, formData);
      if (questionData.data.length) {
        setQuestionData((prevData) => {
          const { data: prevArray } = prevData;
          return { data: [response, ...prevArray] };
        });
      } else {
        setQuestionData({ data: [response] });
        setTotal(1);
      }
    } catch (err) {
      console.log(err);
    } finally {
      onClose();
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setTextareaText(inputValue);
  };

  return (
    <div className={cx("background")}>
      <div className={cx("container", "shadow-3")}>
        <div className={cx("titleWrap")}>
          <div className={cx("title")}>
            <IconMessages className={cx("iconMessages")} />
            <span>질문을 작성하세요</span>
          </div>
          <button className={cx("closeButton")} onClick={onClose}>
            <IconClose className={cx("iconClose")} />
          </button>
        </div>
        <div className={cx("userInfoWrap")}>
          <span className={cx("body-2-regular")}>To.</span>
          <img className={cx("userImage")} src={imageSource} alt="프로필" />
          <span className={cx("body-3-regular")}>{name}</span>
        </div>
        <div className={cx("formWrap")}>
          <InputTextarea onChange={handleInputChange} value={textareaText} />
          <ButtonBox
            text={"질문 보내기"}
            qnaInactivate="qnaInactivate"
            qnaWidth="qnaWidth"
            onClick={handleButtonClick}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
