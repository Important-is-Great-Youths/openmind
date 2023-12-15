import { axiosInstance } from "../../util/axiosInstance";
import { useAsync } from "../../util/useAsync";

// subjectId를 받아 답변자의 id, name, imageSource, questionCount, createdAt를 가져오는 Hook

export const useGetSubject = (subjectId) => {
  const getSubject = () => axiosInstance.get(`subjects/${subjectId}/`);
  const { loading, error, data } = useAsync(getSubject);

  return { loading, error, data };
};

// 이하 사용 예시

// const GetSubject = ({ subjectId }) => {
//   const { loading, error, data } = useGetSubject(subjectId);

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
//       <h1>useGetSubject</h1>
//       <p>name: {data.name}</p>
//       <img src={data.imageSource} alt={data.name} />
//       <p>questionCount: {data.questionCount}</p>
//     </div>
//   );
// };