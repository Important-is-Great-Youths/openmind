import { useAsync } from "../../util/useAsync";
import { axiosInstance } from "../../util/axiosInstance";

// count(답변자의 수), next, previous, results(모든 subject의 데이터)를 가져오는 Hook

export const useGetSubjects = () => {
  const getSubjects = () => axiosInstance.get("subjects/");
  const { loading, error, data } = useAsync(getSubjects);

  // 기본값 설정 (data가 undefined인 경우 빈 배열을 가진 객체로 초기화)
  const subjectsData = data || { results: [] };

  return { loading, error, data: subjectsData, getSubjects };
};

// 이하 사용 예시

// const GetSubjects = () => {
//   const { loading, error, data } = useGetSubjects();
//   const { count, next, previous, results } = data || {};
//   const subjects = data ? { count, next, previous, results } : null;

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   if (!data) {
//     return <p>No data available.</p>;
//   }
//   return (
//     <>
//       <h1>Subjects</h1>
//       <p>count: {subjects ? subjects.count : null}</p>
//       <p>next: {subjects ? subjects.next : null}</p>
//       <p>previous: {subjects ? subjects.previous : null}</p>
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
