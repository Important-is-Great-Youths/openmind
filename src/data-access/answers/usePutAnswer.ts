import { useState } from "react";
import { axiosInstance } from "../../util/axiosInstance";

// answer를 전체 수정하는 hook. 만드시 모든 데이터(content, isRejected가 있어야 수정됨)

export const usePutAnswer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [putData, setPutData] = useState(null);

  const putAnswer = async (answerId, content, isRejected) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axiosInstance.put(`answers/${answerId}/`, {
        content,
        isRejected,
      });
      setPutData(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, putData, putAnswer };
};

// 이하 예시 코드

// const PutAnswerForm = ({ answerId }) => {
//   const [content, setContent] = useState("");
//   const [isRejected, setIsRejected] = useState(false);

//   const { loading, error, putData, putAnswer } = usePutAnswer();

//   const handlePutAnswer = async (e) => {
//     e.preventDefault();
//     try {
//       await putAnswer(answerId, content, isRejected);
//     } catch (error) {
//       console.error("Error while updateing answer: ", error);
//     }
//   };

//   return (
//     <form onSubmit={handlePutAnswer}>
//       <label>
//         Content :
//         <input
//           type="text"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         IsRejected :
//         <input
//           type="checkbox"
//           checked={isRejected}
//           onChange={(e) => setIsRejected(e.target.checked)}
//         />
//       </label>
//       <br />
//       <button type="submit" disabled={loading}>
//         {loading ? "Updating..." : "Update Answer"}
//       </button>
//       {error && <p>Error: {error.message}</p>}
//       {putData && <p>Answer updated successfully!</p>}
//     </form>
//   );
// };