import { useEffect, useState } from "react";
import { axiosInstance } from "../../util/axiosInstance";

const useGetSubject = (subjectId) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  console.log(subjectId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`subjects/${subjectId}/`);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [subjectId]);

  return { loading, error, data };
};

export default useGetSubject;
