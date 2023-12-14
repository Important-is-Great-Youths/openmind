import { Link } from "react-router-dom";
import React from "react";
import ButtonBox from "../../components/ui/ButtonBox/ButtonBox";
import answers from "../../data/answers.json";
import subjects from "../../data/subjects.json";
import questions from "../../data/questions.json";
import AnswerList from "../../components/feature/MockUpTest/AnswerList";
import QuestionList from "../../components/feature/MockUpTest/QuestionList";
import SubjectList from "../../components/feature/MockUpTest/SubjectList";

export const TestPage = () => {
  return (
    <>
      <Link to="/">MainPage 가는 링크</Link>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <ButtonBox text={"안녕"} qnaBtn="answerBtn" />
      <AnswerList items={answers} />
      <QuestionList items={questions} />
      <SubjectList items={subjects} />
    </>
  );
};