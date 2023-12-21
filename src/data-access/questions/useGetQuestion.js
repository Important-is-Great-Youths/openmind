import { axiosInstance } from "../../util/axiosInstance";
import { useState, useEffect, useCallback } from "react";

export const useGetQuestion = (questionId) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // useCallback을 사용하여 함수를 감싸줌
  const getQuestion = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axiosInstance.get(`questions/${questionId}/`);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [questionId]); // questionId를 종속성으로 명시

  useEffect(() => {
    const fetchData = async () => {
      await getQuestion();
    };

    fetchData();
  }, [getQuestion]);

  return { loading, error, data, getSubject: getQuestion };
};

// 이하 예시

// const GetQuestion = ({ questionId }) => {
//   const { loading, error, data } = useGetQuestion(questionId);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   if (!data) {
//     return null; // 데이터가 없는 경우 아무것도 렌더링하지 않음
//   }

//   const { id, subjectId, content, like, dislike, createdAt, answer } = data;

//   return (
//     <div>
//       <h2>Question ID: {id}</h2>
//       <p>Subject ID: {subjectId}</p>
//       <p>Content: {content}</p>
//       <p>Like: {like}</p>
//       <p>Dislike: {dislike}</p>
//       <p>Created At: {createdAt}</p>
//       {/* 이하 데이터 활용 예시 */}
//       {answer && (
//         <div>
//           <h3>Answer</h3>
//           <p>Answer ID: {answer.id}</p>
//           <p>Answer Content: {answer.content}</p>
//           {/* 추가적인 데이터 표시 */}
//         </div>
//       )}
//     </div>
//   );
// };
