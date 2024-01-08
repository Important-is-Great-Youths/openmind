import { axiosInstance } from "../../util/axiosInstance";
import { useAsync } from "../../util/useAsync";

// answerId를 받아 해당 질문의 id, questionId, content, isRejected, createdAt를 가져오는 Hook

export const useGetAnswer = (answerId) => {
  const getAnswer = () => axiosInstance.get(`answers/${answerId}/`);
  const { loading, error, data } = useAsync(getAnswer);
  return { loading, error, data };
};

// 이하 사용 예시

// const GetAnswer = ({ answerId }) => {
//   const { loading, error, data } = useGetAnswer(answerId);
//   const { id, questionId, content, isRejected, createdAt } = data || {};
//   const answer = data
//     ? { id, questionId, content, isRejected, createdAt }
//     : null;

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
//     <div>
//       <h1>Answer</h1>
//       <p>id: {answer.id}</p>
//       <p>questionId: {answer.questionId}</p>
//       <p>content: {answer.content}</p>
//       <p>isRejected: {String(answer.isRejected)}</p>
//       <p>createdAt: {answer.createdAt}</p>
//     </div>
//   );
// };
