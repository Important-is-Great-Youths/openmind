import React, { useState } from "react";
import { useGetAnswer } from "../../data-access/answers/useGetAnswer";
import { usePutAnswer } from "../../data-access/answers/usePutAnswer";
import usePatchAnswer from "../../data-access/answers/usePatchAnswer";
import { useDeleteAnswer } from "../../data-access/answers/useDeleteAnswer";

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
      <h1>Put</h1>
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

const PatchAnswerForm = ({ answerId }) => {
  const [content, setContent] = useState("");
  const [isRejected, setIsRejected] = useState(false);

  const {
    loading,
    error,
    patchData,
    patchAnswerContent,
    patchAnswerIsRejected,
  } = usePatchAnswer();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 질문 내용이 있다면 content patch
      if (content !== "") {
        await patchAnswerContent(answerId, content);
      }
      // isRejected를 전송
      await patchAnswerIsRejected(answerId, isRejected);
    } catch (error) {
      console.error("Error while updating answer:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Patch</h1>
      <label>
        Content:
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <br />
      <label>
        Is Rejected:
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
      {patchData && <p>Answer updated successfully!</p>}
    </form>
  );
};

const DeleteAnswerButton = ({ answerId }) => {
  const { loading, error, deleteData, deleteAnswer } = useDeleteAnswer();

  const handleDelete = () => {
    deleteAnswer(answerId);
  };

  return (
    <div>
      <button onClick={handleDelete} disabled={loading}>
        Delete Answer
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {deleteData && <p>Data Deleted: {JSON.stringify(deleteData)}</p>}
    </div>
  );
};

export const TestPage = () => {
  const ANSWER_ID = "1641";
  return (
    <>
      <GetAnswer answerId={ANSWER_ID} />
      <br />
      <PutAnswerForm answerId={ANSWER_ID} />
      <br />
      <PatchAnswerForm answerId={ANSWER_ID} />
      <br />
      <DeleteAnswerButton answerId={ANSWER_ID} />
    </>

  );
};
