import React from "react";
import { useGetSubjects } from "../../data-access/subjects/useGetSubjects";
import { useGetSubject } from "../../data-access/subjects/useGetSubject";

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
        <GetSubject key={result.id} subjectId={result.id} />
      ))}
    </>
  );
};

const GetSubject = ({ subjectId }) => {
  const { loading, error, data } = useGetSubject(subjectId);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No data available for subjectId: {subjectId}</p>;
  }

  // 여기서 data를 사용하여 원하는 렌더링을 수행
  return (
    <div>
      <h1>useGetSubject</h1>
      <p>name: {data.name}</p>
      <p>id: {data.id}</p>
      <img src={data.imageSource} alt={data.name} />
      <p>questionCount: {data.questionCount}</p>
    </div>
  );
};

export const TestPage = () => {
  return (
    <>
      <GetSubjects />
    </>
  );
};
