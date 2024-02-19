import { useState } from "react";
import { axiosInstance } from "../../util/axiosInstance";

interface postQuestionDataType {
  subjectId: number;
  content: string;
  like: 0;
  dislike: 0;
  team: "2-3";
}

export const usePostSubjectQustions = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [postQuestionData, setPostQuestionData] =
    useState<postQuestionDataType>();

  const postSubjectQuestions = async (
    subjectId: number,
    questionData: string
  ) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post(
        `subjects/${subjectId}/questions/`,
        questionData
      );
      setPostQuestionData(response?.data);
      return response;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, postData: postQuestionData, postSubjectQuestions };
};

// 이하 적용 예시

// const PostQuesionsForm = ({ subjectId }) => {
//   const [content, setContent] = useState("");

//   const { loading, error, postData, postSubjectQuestions } =
//     usePostSubjectQustions();

//   const handleQuestionSumbit = async () => {
//     const questionData = {
//       subjectId,
//       content,
//       like: 0,
//       dislike: 0,
//       team: "2-3",
//     };
//     await postSubjectQuestions(subjectId, questionData);
//   };

//   return (
//     <div>
//       <h3>PostQuesionsInput</h3>
//       <label>Question Content: </label>
//       <input
//         type="text"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//       />
//       <br />
//       <button onClick={handleQuestionSumbit} disabled={loading}>
//         Submit Question
//       </button>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//       {postData && <p>Data Posted: {JSON.stringify(postData)}</p>}
//     </div>
//   );
// };
