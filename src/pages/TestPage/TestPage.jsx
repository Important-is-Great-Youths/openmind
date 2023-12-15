import React, { useState } from "react";
import { useGetSubjects } from "../../data-access/subjects/useGetSubjects";
import { usePostSubjects } from "../../data-access/subjects/usePostSubjects";

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

const GetSubjectResult = ({ result }) => {
  return (
    <>
      <div>
        <h2>Subject List</h2>
        <div>
          <p>Name: {result.name}</p>
          <img src={result.imageSource} alt={result.name} />
          <p>Question Count: {result.questionCount}</p>
          <hr />
        </div>
      </div>
    </>
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
