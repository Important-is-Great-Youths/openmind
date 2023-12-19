import React from "react";
import { useGetQuestion } from "../../data-access/questions/useGetQuestion";

const GetQuestion = ({ questionId }) => {
  const { loading, error, data } = useGetQuestion(questionId);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return null; // 데이터가 없는 경우 아무것도 렌더링하지 않음
  }

  const { id, subjectId, content, like, dislike, createdAt, answer } = data;

  return (
    <div>
      <h2>Question ID: {id}</h2>
      <p>Subject ID: {subjectId}</p>
      <p>Content: {content}</p>
      <p>Like: {like}</p>
      <p>Dislike: {dislike}</p>
      <p>Created At: {createdAt}</p>
      {/* 이하 데이터 활용 예시 */}
      {answer && (
        <div>
          <h3>Answer</h3>
          <p>Answer ID: {answer.id}</p>
          <p>Answer Content: {answer.content}</p>
          {/* 추가적인 데이터 표시 */}
        </div>
      )}
    </div>
  );
};

export const TestPage = () => {
  return (
    <>
      <h1>테스트 페이지</h1>
      <GetQuestion questionId={2600} />
    </>
  );
};
