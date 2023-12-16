import React, { useState } from "react";
import { useGetSubjects } from "../../data-access/subjects/useGetSubjects";
import { usePostSubjects } from "../../data-access/subjects/usePostSubjects";
import { useDeleteSubject } from "../../data-access/subjects/useDeleteSubject";
import { useGetSubjectQuestions } from "../../data-access/subjects/useGetSubjectQuestions";

const PostSubjects = () => {
  const [name, setName] = useState("");
  const { loading, error, postData, postSubjects } = usePostSubjects();

  const handleSubmit = () => {
    postSubjects(name);
  };

  return (
    <div>
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
        <GetSubjectResult key={result.id} result={result} />
      ))}
    </>
  );
};

const GetSubjectResult = ({ result: subject }) => {
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
          <GetQuestionsButton subjectId={subject.id} />
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

const GetQuestionsButton = ({ subjectId }) => {
  const {
    loading,
    error,
    data: getquestionsData,
    getSubjectQuestions,
  } = useGetSubjectQuestions({ subjectId });

  const handleGetQuestion = () => {
    getSubjectQuestions(subjectId);
  };

  return (
    <div>
      <button onClick={handleGetQuestion} disabled={loading}>
        Get Questions
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {getquestionsData && (
        <p>Quesion Data: {JSON.stringify(getquestionsData)}</p>
      )}
    </div>
  );
};

export const TestPage = () => {
  return (
    <>
      <h1>testpage</h1>
      <PostSubjects />
      <GetSubjects />
    </>
  );
};
