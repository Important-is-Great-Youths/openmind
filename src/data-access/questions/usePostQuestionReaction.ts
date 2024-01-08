import { useState } from "react";
import { axiosInstance } from "../../util/axiosInstance";

const usePostQuestionReaction = (questionId) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reactionData, setReactionData] = useState(null);

  const postQuestionReaction = async (reactionType) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axiosInstance.post(
        `questions/${questionId}/reaction/`,
        {
          type: reactionType,
        }
      );

      setReactionData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, reactionData, postQuestionReaction };
};

export default usePostQuestionReaction;

// 이하 사용 예시

// const PostQuestionReactionButton = ({ questionId, reactionType }) => {
//   const { loading, error, reactionData, postQuestionReaction } =
//     usePostQuestionReaction();

//   const handleReaction = () => {
//     // reactionType은 'like', 'dislike', 등의 값일 것으로 가정
//     postQuestionReaction(questionId, reactionType);
//   };

//   // 리액션이 성공하면 여기에서 추가 로직을 수행할 수 있습니다.
//   useEffect(() => {
//     if (reactionData) {
//       console.log("Reaction successful:", reactionData);
//     }
//   }, [reactionData]);

//   return (
//     <button onClick={handleReaction} disabled={loading}>
//       {loading ? "Reacting..." : `React ${reactionType}`}
//     </button>
//   );
// };
