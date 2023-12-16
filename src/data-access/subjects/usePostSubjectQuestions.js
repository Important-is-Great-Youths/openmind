import { useState } from "react";
import { axiosInstance } from "../../util/axiosInstance";

export const usePostSubjectQustions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [postQuestionData, setPostQuestionData] = useState(null);

  const postSubjectQuestions = async (subjectId, questionData) => {
    setLoading(true);
    setError(null);
    setPostQuestionData(null);

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
