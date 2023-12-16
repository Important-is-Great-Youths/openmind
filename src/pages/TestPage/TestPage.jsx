import { Link } from "react-router-dom";
import Usercard from "../../components/ui/Usercad/Usercard";
import ButtonBox from "../../components/ui/ButtonBox/ButtonBox";
import PostHeader from "../../components/feature/PostHeader/PostHeader";
import Badge from "../../components/ui/Badge/Badge";
import { useGetSubjects } from "../../data-access/subjects/useGetSubjects";
import useGetSubject from "../../data-access/subjects/useGetSubject";
import FeedCard from "../../components/ui/FeedCard/FeedCard";
import { useState } from "react";
import ButtonFloating from "../../../src/components/ui/ButtonFloating";
import ButtonShare from "../../components/ui/ButtonShare";

const GetSubjects = () => {
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
  const [askFeed, setAskFeed] = useState(true);
  return (
    <>
      <FeedCard askFeed={askFeed} />
      <Usercard />
      <Badge Completed />
      <Badge />
      <GetSubjects />
      <GetSubject subjectId={1279} />
    </>
  );
};
