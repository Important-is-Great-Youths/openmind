import { useState } from "react";
import { axiosInstance } from "../../util/axiosInstance";

const usePostQuestionReaction = (questionId: number) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [reactionData, setReactionData] = useState<any>(null); // 여기서 any 대신 실제 데이터 타입을 지정하는 것이 좋습니다.

  const postQuestionReaction = async (reactionType: string) => {
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
      setError(error); // axios의 에러 응답을 받아옵니다.
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
