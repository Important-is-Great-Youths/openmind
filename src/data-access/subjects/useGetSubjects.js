import { useAsync } from "../../util/useAsync";
import { axiosInstance } from "../../util/axiosInstance";

export const useGetSubjects = () => {
  const getSubjects = () => axiosInstance.get("subjects/");
  const { loading, error, data } = useAsync(getSubjects);

  // 기본값 설정 (data가 undefined인 경우 빈 배열을 가진 객체로 초기화)
  const subjectsData = data || { results: [] };

  return { loading, error, data: subjectsData };
};

// const GetSubject = () => {
//   const { data } = useGetSubject();
//   const { count, next, previous, results } = data || {};
//   const subjectsCount = data ? { count, next, previous, results } : null;
//   return (
//     <>
//       <h1>Subjects</h1>
//       <p>count: {subjectsCount ? subjectsCount.count : null}</p>
//       <p>next: {subjectsCount ? subjectsCount.next : null}</p>
//       <p>previous: {subjectsCount ? subjectsCount.previous : null}</p>
//       {results.map((result) => (
//         <GetSubjectResult key={result.id} result={result} />
//       ))}
//     </>
//   );
// };

// const GetSubjectResult = ({ result }) => {
//   return (
//     <>
//       <div>
//         <h2>Subject List</h2>
//         <div>
//           <p>Name: {result.name}</p>
//           <img src={result.imageSource} alt={result.name} />
//           <p>Question Count: {result.questionCount}</p>
//           <hr />
//         </div>
//       </div>
//     </>
//   );
// };
