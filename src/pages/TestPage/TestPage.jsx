import React, { useState } from "react";
import { useGetSubjects } from "../../data-access/subjects/useGetSubjects";
import { usePostSubjects } from "../../data-access/subjects/usePostSubjects";
import { useDeleteSubject } from "../../data-access/subjects/useDeleteSubject";
import { useGetSubjectQuestions } from "../../data-access/subjects/useGetSubjectQuestions";
import { usePostSubjectQustions } from "../../data-access/subjects/usePostSubjectQuestions";

const PostSubjects = () => {
  const [name, setName] = useState("");
  const { loading, error, postData, postSubjects } = usePostSubjects();

  const handleSubmit = () => {
    postSubjects(name);
  };

  return (
    <div>
      <h1>PostSubjects</h1>
      <label>Name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit} disabled={loading}>
        Submit
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {postData && <p>Data Posted: {JSON.stringify(postData)}</p>}
    </div>
  );
};

const GetSubjects = () => {
  const { loading, error, data } = useGetSubjects();
  const { count, next, previous, results } = data || {};
  const subjects = data ? { count, next, previous, results } : null;

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
    <>
      <h1>Subjects</h1>
      <p>count: {subjects ? subjects.count : null}</p>
      <p>next: {subjects ? subjects.next : null}</p>
      <p>previous: {subjects ? subjects.previous : null}</p>
      {results.map((result) => (
        <GetSubject key={result.id} result={result} />
      ))}
    </>
  );
};

const GetSubject = ({ result: subject }) => {
  return (
    <>
      <div>
        <h2>Subject List</h2>
        <div>
          <p>Name: {subject.name}</p>
          <p>Subejct ID: {subject.id}</p>
          <img src={subject.imageSource} alt={subject.name} />
          <p>Question Count: {subject.questionCount}</p>
          <DeleteSubjectButton subjectId={subject.id} />
          <PostQuesionsForm subjectId={subject.id} />
          <GetQuestions subjectId={subject.id} />
          <hr />
        </div>
      </div>
    </>
  );
};

const DeleteSubjectButton = ({ subjectId }) => {
  const { loading, error, deleteData, deleteSubject } = useDeleteSubject();

  const handleDelete = () => {
    deleteSubject(subjectId);
  };

  return (
    <div>
      <button onClick={handleDelete} disabled={loading}>
        Delete Subject
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {deleteData && <p>Data Deleted: {JSON.stringify(deleteData)}</p>}
    </div>
  );
};

const GetQuestions = ({ subjectId }) => {
  const {
    loading,
    error,
    data: getquestionsData,
  } = useGetSubjectQuestions({ subjectId });

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {getquestionsData && (
        <div>
          <h3>Question Data</h3>
          <p>{JSON.stringify(getquestionsData)}</p>
        </div>
      )}
    </div>
  );
};

const PostQuesionsForm = ({ subjectId }) => {
  const [content, setContent] = useState("");

  const { loading, error, postData, postSubjectQuestions } =
    usePostSubjectQustions();

  const handleQuestionSumbit = async () => {
    const questionData = {
      subjectId,
      content,
      like: 0,
      dislike: 0,
      team: "2-3",
    };
    await postSubjectQuestions(subjectId, questionData);
  };

  return (
    <div>
      <h3>PostQuesionsInput</h3>
      <label>Question Content: </label>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <button onClick={handleQuestionSumbit} disabled={loading}>
        Submit Question
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {postData && <p>Data Posted: {JSON.stringify(postData)}</p>}
    </div>
  );
};

export const TestPage = () => {
  return (
    <>
      <PostSubjects />
      <GetSubjects />
    </>
  );
};
