import React, { useState } from "react";
import { useGetAnswer } from "../../data-access/answers/useGetAnswer";
import { usePutAnswer } from "../../data-access/answers/usePutAnswer";

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
      <p>isRejected: {String(answer.isRejected)}</p>
      <p>createdAt: {answer.createdAt}</p>
    </div>
  );
};

const PutAnswerForm = ({ answerId }) => {
  const [content, setContent] = useState("");
  const [isRejected, setIsRejected] = useState(false);

  const { loading, error, putData, putAnswer } = usePutAnswer();

  const handlePutAnswer = async (e) => {
    e.preventDefault();
    try {
      await putAnswer(answerId, content, isRejected);
    } catch (error) {
      console.error("Error while updateing answer: ", error);
    }
  };

  return (
    <form onSubmit={handlePutAnswer}>
      <label>
        Content :
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <br />
      <label>
        IsRejected :
        <input
          type="checkbox"
          checked={isRejected}
          onChange={(e) => setIsRejected(e.target.checked)}
        />
      </label>
      <br />
      <button type="submit" disabled={loading}>
        {loading ? "Updating..." : "Update Answer"}
      </button>
      {error && <p>Error: {error.message}</p>}
      {putData && <p>Answer updated successfully!</p>}
    </form>
  );
};

export const TestPage = () => {
  const ANSWER_ID = "1590";
  return (
    <>
      <GetAnswer answerId={ANSWER_ID} />
      <br />
      <PutAnswerForm answerId={ANSWER_ID} />
    </>
  );
};
