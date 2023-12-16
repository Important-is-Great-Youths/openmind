import { useState } from "react";
import axios from "axios";

export const useDeleteSubject = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deleteData, setDeleteData] = useState(null);

  const deleteSubject = async (subjectId) => {
    try {
      setLoading(true);

      const response = await axios.delete(
        `https://openmind-api.vercel.app/2-3/subjects/${subjectId}/`
      );
      setDeleteData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, deleteData, deleteSubject };
};
