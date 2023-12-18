import { useState } from "react";
import { axiosInstance } from "../../util/axiosInstance";

export const useDeleteQuestion = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deleteData, setDeleteData] = useState(null);

  const deleteQuestion = async (questionId) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axiosInstance.delete(`questions/${questionId}/`);
      setDeleteData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, deleteData, deleteQuestion };
};

// 이하 사용 예시
// const DeleteQuestionButton = ({ questionId, onDeleteSuccess }) => {
//   const { loading, error, deleteData, deleteQuestion } = useDeleteQuestion();

//   const handleDelete = () => {
//     if (window.confirm("정말로 삭제하시겠습니까?")) {
//       // 확인 후 삭제 동작 수행
//       deleteQuestion(questionId);
//     }
//   };

//   // 삭제가 성공하면 onDeleteSuccess 콜백 호출
//   React.useEffect(() => {
//     if (deleteData) {
//       onDeleteSuccess();
//     }
//   }, [deleteData, onDeleteSuccess]);

//   return (
//     <button onClick={handleDelete} disabled={loading}>
//       {loading ? "Deleting..." : "Delete Question"}
//     </button>
//   );
// };
