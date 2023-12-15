import { useGetSubjects } from "../../data-access/subjects/useGetSubjects";
import useGetSubject from "../../data-access/subjects/useGetSubject";

const GetSubjects = () => {
  const { loading, error, data } = useGetSubjects();
  const { count, next, previous, results } = data || {};
  const subjectsCount = data ? { count, next, previous, results } : null;

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
      <p>count: {subjectsCount ? subjectsCount.count : null}</p>
      <p>next: {subjectsCount ? subjectsCount.next : null}</p>
      <p>previous: {subjectsCount ? subjectsCount.previous : null}</p>
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

const GetSubject = ({ subjectId }) => {
  const { loading, error, data } = useGetSubject(subjectId);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No data available.</p>;
  }

  // 여기서 data를 사용하여 원하는 렌더링을 수행
  return (
    <div>
      <h1>useGetSubject</h1>
      <p>name: {data.name}</p>
      <img src={data.imageSource} alt={data.name} />
      <p>questionCount: {data.questionCount}</p>
    </div>
  );
};

export const TestPage = () => {
  return (
    <>
      <GetSubjects />
      <GetSubject subjectId={1279} />
    </>
  );
};
