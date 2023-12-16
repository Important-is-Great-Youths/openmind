import { useAsync } from "../../util/useAsync";
import { axiosInstance } from "../../util/axiosInstance";

// 지정 subject의 count(질문의 수), next, previous, results(quesion의 데이터)를 가져오는 Hook

export const useGetSubjectQuestions = ({ subjectId }) => {
  const getSubjectQuestions = () =>
    axiosInstance.get(`subjects/${subjectId}/questions/`);
  const { loading, error, data } = useAsync(getSubjectQuestions);

  // 기본값 설정 (data가 undefined인 경우 빈 배열을 가진 객체로 초기화)
  const subjectsData = data || { results: [] };

  return { loading, error, data: subjectsData, getSubjectQuestions };
};

// 이하 사용 예시
// const GetSubjectQuestions = ({ subjectId }) => {
//   const { loading, error, data } = useGetSubjectQuestions({ subjectId });
//   const { count, next, previous, results } = data || {};
//   const subjectQuestions = data ? { count, next, previous, results } : null;

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   if (!data) {
//     return <p>No data available.</p>;
//   }

//   // 여기서 data를 사용하여 원하는 렌더링을 수행
//   return (
//     <div>
//       <h1>useGetSubjectQuestions</h1>
//       <p>count: {subjectQuestions ? subjectQuestions.count : null}</p>
//       <p>next: {subjectQuestions ? subjectQuestions.next : null}</p>
//       <p>previous: {subjectQuestions ? subjectQuestions.previous : null}</p>
//       {results.map((result) => (
//         <GetSubjectQuestionsResult key={result.id} result={result} />
//       ))}
//     </div>
//   );
// };

// const GetSubjectQuestionsResult = ({ result }) => {
//   return (
//     <>
//       <div>
//         <h2>subjectQuesion List</h2>
//         <div>
//           <p>Q. {result.content}</p>
//           <p>like : {result.like}</p>
//           <p>dislike : {result.dislike}</p>
//           <p>createdAt : {result.createdAt}</p>
//           <hr />
//         </div>
//       </div>
//     </>
//   );
// };