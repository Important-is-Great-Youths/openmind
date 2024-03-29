import React from "react";
import styles from "./FeedCardAnswerEdit.module.scss";
import classNames from "classnames/bind";
import ButtonBox from "../ButtonBox/ButtonBox";
import { getElapsedTime } from "../../../util/getElapsedTime";

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useGetSubject } from "../../../data-access/subjects/useGetSubject";
import { useGetAnswer } from "../../../data-access/answers/useGetAnswer";
import usePatchAnswer from "../../../data-access/answers/usePatchAnswer";
import usePostQuestionAnswers from "../../../data-access/questions/usePostQuestionAnswer";

const cx = classNames.bind(styles);

interface FeedCardAnswerEditProps {
  answerId: number;
  questionId: number;
  propFunction: () => void;
}

interface AnswerData {
  id: number;
  questionId: number;
  content: string;
  isRejected: boolean;
  createdAt: Date;
}

export default function FeedCardAnswerEdit({
  answerId,
  questionId,
  propFunction,
}: FeedCardAnswerEditProps) {
  // 사용자 명 가져오기
  const { id: subejctId } = useParams();
  const { data: subjectData } = useGetSubject(Number(subejctId));
  const { name }: any = subjectData || {};
  // answer 있으면 가져오기
  const { data: answerData } = useGetAnswer(answerId || null);
  const { id, content, isRejected, createdAt } =
    answerData || ({} as AnswerData);
  const answer = answerData ? { id, content, isRejected, createdAt } : null;

  const answerContent = answer ? answer.content : "";
  // answer 있으면 patch로 수정
  const { patchAnswerContent } = usePatchAnswer();
  const [editText, setEditText] = useState<string>(answerContent); // useState로 초기 상태 설정
  const [isEmpty, setIsEmpty] = useState<boolean>(editText ? false : true);
  // answer 없으면 post로 삽입
  const { postQuestionAnswer } = usePostQuestionAnswers(); // questionId, content

  const handleOnChange = (e: any) => {
    const textValue = e.target.value;
    setEditText(textValue);
    setIsEmpty(!editText.trim());
  };

  const handleOnClick = () => {
    if (answer) {
      patchAnswerContent(answerId, editText);
    } else {
      postQuestionAnswer(questionId, editText);
    }
    propFunction();
  };

  useEffect(() => {
    setEditText(answerContent);
  }, [answerContent]);

  return (
    <div className={cx("feedCardAnswer")}>
      <div className={cx("imgBox")} />
      <div className={cx("userAnswer")}>
        <div className={cx("userProfile")}>
          <span className={cx("userName")}>{name}</span>
          <span className={cx("userCreateDate")}>
            {answer && getElapsedTime(answer.createdAt)}
          </span>
        </div>
        <div className={cx("answerEdit")}>
          <textarea
            className={cx("answerInput")}
            value={editText} // 텍스트에 상태값을 설정해야 함
            onChange={handleOnChange} // 텍스트 입력이 발생할 때마다 상태 업데이트
            placeholder="답변을 입력해주세요."
            required
          />
          <ButtonBox
            text="수정 완료"
            qnaWidth="qnaWidth"
            qnaInactivate={isEmpty ? "qnaInactivate" : ""}
            onClick={handleOnClick}
          />
        </div>
      </div>
    </div>
  );
}
