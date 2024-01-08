import { useState, useEffect } from "react";
import { axiosInstance } from "../../util/axiosInstance";

// count(답변자의 수), next, previous, results(모든 subject의 데이터)를 가져오는 Hook

export const useGetSubjects = (customLimit = 8, customOffset = 0) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({ results: [] });

  const getSubjects = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axiosInstance.get("subjects/", {
        params: {
          limit: customLimit, // 전달 받은 customLimit 사용
          offset: customOffset
        }
      });
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSubjects();
  }, []);

  return { loading, error, data, getSubjects };
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
