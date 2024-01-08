import { useState } from "react";
import { axiosInstance } from "../../util/axiosInstance";

const usePatchAnswer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [patchData, setPatchData] = useState(null);

  const patchAnswerContent = async (answerId, content) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axiosInstance.patch(`answers/${answerId}/`, {
        content,
      });

      setPatchData(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const patchAnswerIsRejected = async (answerId, isRejected) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axiosInstance.patch(`answers/${answerId}/`, {
        isRejected,
      });
      setPatchData(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    patchData,
    patchAnswerContent,
    patchAnswerIsRejected,
  };
};

export default usePatchAnswer;

// 이하 예시 코드

// const PatchAnswerForm = ({ answerId }) => {
//   const [content, setContent] = useState("");
//   const [isRejected, setIsRejected] = useState(false);

//   const {
//     loading,
//     error,
//     patchData,
//     patchAnswerContent,
//     patchAnswerIsRejected,
//   } = usePatchAnswer();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // 질문 내용이 있다면 content patch
//       if (content !== "") {
//         await patchAnswerContent(answerId, content);
//       }
//       // isRejected를 전송
//       await patchAnswerIsRejected(answerId, isRejected);
//     } catch (error) {
//       console.error("Error while updating answer:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>Patch</h1>
//       <label>
//         Content:
//         <input
//           type="text"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Is Rejected:
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
//       {patchData && <p>Answer updated successfully!</p>}
//     </form>
//   );
// };