import { useGetSubjects } from "../../data-access/subjects/useGetSubjects";
import { useGetSubject } from "../../data-access/subjects/useGetSubject";
import { useGetSubjectQuestions } from "../../data-access/subjects/useGetSubjectQuestions";

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

const GetSubjectQuestions = ({ subjectId }) => {
  const { loading, error, data } = useGetSubjectQuestions({ subjectId });
  const { count, next, previous, results } = data || {};
  const subjectQuestions = data ? { count, next, previous, results } : null;

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
      <h1>useGetSubjectQuestions</h1>
      <p>count: {subjectQuestions ? subjectQuestions.count : null}</p>
      <p>next: {subjectQuestions ? subjectQuestions.next : null}</p>
      <p>previous: {subjectQuestions ? subjectQuestions.previous : null}</p>
      {results.map((result) => (
        <GetSubjectQuestionsResult key={result.id} result={result} />
      ))}
    </div>
  );
};

const GetSubjectQuestionsResult = ({ result }) => {
  return (
    <>
      <div>
        <h2>subjectQuesion List</h2>
        <div>
          <p>Q. {result.content}</p>
          <p>like : {result.like}</p>
          <p>dislike : {result.dislike}</p>
          <p>createdAt : {result.createdAt}</p>
          <hr />
        </div>
      </div>
    </>
  );
};

export const TestPage = () => {
  const subjectId = 1277;
  return (
    <>
      <GetSubjects />
      <GetSubject subjectId={subjectId} />
      <GetSubjectQuestions subjectId={subjectId} />
    </>
  );
};
