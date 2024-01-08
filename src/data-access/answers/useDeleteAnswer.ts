import { useState } from "react";
import { axiosInstance } from "../../util/axiosInstance";

export const useDeleteAnswer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deleteData, setDeleteData] = useState(null);

  const deleteAnswer = async (answerId) => {
    try {
      setLoading(true);

      const response = await axiosInstance.delete(`answers/${answerId}/`);
      setDeleteData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, deleteData, deleteAnswer };
};

// 이하 사용 예시
// const DeleteAnswerButton = ({ answerId }) => {
//   const { loading, error, deleteData, deleteAnswer } = useDeleteAnswer();

//   const handleDelete = () => {
//     deleteAnswer(answerId);
//   };

//   return (
//     <div>
//       <button onClick={handleDelete} disabled={loading}>
//         Delete Answer
//       </button>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//       {deleteData && <p>Data Deleted: {JSON.stringify(deleteData)}</p>}
//     </div>
//   );
// };
