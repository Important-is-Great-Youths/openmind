import { useAsync } from "../../util/useAsync";
import { axiosInstance } from "../../util/axiosInstance";

// 지정 subject의 count(질문의 수), next, previous, results(quesion의 데이터)를 가져오는 Hook

export const useGetSubjectQuestions = ({ subjectId }) => {
  const getSubjectQuestions = () =>
    axiosInstance.get(`subjects/${subjectId}/questions/`);
  const { loading, error, data } = useAsync(getSubjectQuestions);

  // 기본값 설정 (data가 undefined인 경우 빈 배열을 가진 객체로 초기화)
  const subjectsData = data || { results: [] };

  return { loading, error, data: subjectsData };
};
