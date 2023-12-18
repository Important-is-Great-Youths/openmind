
import { useState } from "react";
import { axiosInstance } from "../../util/axiosInstance";

export const useDeleteSubject = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deleteData, setDeleteData] = useState(null);

  const deleteSubject = async (subjectId) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axiosInstance.delete(`subjects/${subjectId}/`);
      setDeleteData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, deleteData, deleteSubject };
};

// 이하 사용 예시
// const DeleteSubjectButton = ({ subjectId }) => {
//   const { loading, error, deleteData, deleteSubject } = useDeleteSubject();

//   const handleDelete = () => {
//     deleteSubject(subjectId);
//   };

//   return (
//     <div>
//       <button onClick={handleDelete} disabled={loading}>
//         Delete Subject
//       </button>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//       {deleteData && <p>Data Deleted: {JSON.stringify(deleteData)}</p>}
//     </div>
//   );

// };