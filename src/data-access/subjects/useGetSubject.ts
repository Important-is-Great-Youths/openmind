import { axiosInstance } from "../../util/axiosInstance";
import { useState, useEffect } from "react";

// subjectId를 받아 답변자의 id, name, imageSource, questionCount, createdAt를 가져오는 Hook

export const useGetSubject = (subjectId) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const getSubject = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axiosInstance.get(`subjects/${subjectId}/`);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getSubject();
    };

    fetchData();
  }, [subjectId]);

  return { loading, error, data, getSubject };
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