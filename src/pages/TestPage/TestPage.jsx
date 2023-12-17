import React from "react";
import { useGetAnswer } from "../../data-access/answers/useGetAnswer";

const GetAnswer = ({ answerId }) => {
  const { loading, error, data } = useGetAnswer(answerId);
  const { id, questionId, content, isRejected, createdAt } = data || {};
  const answer = data
    ? { id, questionId, content, isRejected, createdAt }
    : null;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No data available.</p>;
  }

  return (
    <div>
      <h1>Answer</h1>
      <p>id: {answer.id}</p>
      <p>questionId: {answer.questionId}</p>
      <p>content: {answer.content}</p>
      <p>isRejected: {answer.isRejected}</p>
      <p>createdAt: {answer.createdAt}</p>
    </div>
  );
};

export const TestPage = () => {
  return (
    <>
      <GetAnswer answerId="1590" />
    </>
  );
};
