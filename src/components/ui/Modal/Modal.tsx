import React from "react";
import styles from "./Modal.module.scss";
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

interface ModalProps {
  onClose?: any;
  setQuestionData: React.Dispatch<React.SetStateAction<any>>;
  questionData: { data: any[] };
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}

const Modal = ({
  onClose,
  setQuestionData,
  questionData,
  setTotal,
}: ModalProps) => {
  const { id } = useParams();
  const { data: subjectData } = useGetSubject(Number(id));
  const { imageSource, name }: { imageSource?: string; name?: string } =
    subjectData || {};
  const [textareaText, setTextareaText] = useState("");

  const handleButtonClick = async () => {
    try {
      const formData = JSON.stringify({ content: `${textareaText}` });
      const response = await postSubjectsQuestion(Number(id), formData);
      if (questionData.data.length) {
        setQuestionData((prevData: { data: any[] }) => {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
