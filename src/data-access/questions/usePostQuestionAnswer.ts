import { useState } from "react";
import { axiosInstance } from "../../util/axiosInstance";

const usePostQuestionAnswer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [answerData, setAnswerData] = useState(null);
  const TEAM = "2-3";
  const postQuestionAnswer = async (questionId, content) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axiosInstance.post(
        `questions/${questionId}/answers/`,
        {
          questionId,
          content,
          isRejected: false,
          team: TEAM,
        }
      );

      setAnswerData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, answerData, postQuestionAnswer };
};

export default usePostQuestionAnswer;

// 이하 사용 예시

// const PostQuestionAnswerForm = ({ questionId }) => {
//   const { loading, error, answerData, postQuestionAnswer } =
//     usePostQuestionAnswer();
//   const [content, setContent] = useState("");
//   const [team, setTeam] = useState("");

//   const handlePostAnswer = () => {
//     postQuestionAnswer(questionId, content, team);
//   };

//   // 답변이 성공하면 여기에서 추가 로직을 수행할 수 있습니다.
//   React.useEffect(() => {
//     if (answerData) {
//       console.log("Answer posted successfully:", answerData);
//     }
//   }, [answerData]);

//   return (
//     <div>
//       <label>
//         Content:
//         <input
//           type="text"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />
//       </label>
//       <label>
//         Team:
//         <input
//           type="text"
//           value={team}
//           onChange={(e) => setTeam(e.target.value)}
//         />
//       </label>
//       <button onClick={handlePostAnswer} disabled={loading}>
//         {loading ? "Posting..." : "Post Answer"}
//       </button>
//       {error && <div>Error: {error.message}</div>}
//     </div>
//   );
// };
