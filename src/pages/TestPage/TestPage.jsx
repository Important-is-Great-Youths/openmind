import { useGetSubjects } from "../../data-access/useGetSubjects";

const GetSubject = () => {
  const { data } = useGetSubjects();
  const { count, next, previous, results } = data || {};
  const subjectsCount = data ? { count, next, previous, results } : null;
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

export const TestPage = () => {
  return (
    <>
      <GetSubject />
    </>
  );
};
