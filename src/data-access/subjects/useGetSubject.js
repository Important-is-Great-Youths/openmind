import { axiosInstance } from "../../util/axiosInstance";
import { useAsync } from "../../util/useAsync";

// subjectId를 받아 답변자의 id, name, imageSource, questionCount, createdAt를 가져오는 Hook

const useGetSubject = (subjectId) => {
  const getSubject = () => axiosInstance.get(`subjects/${subjectId}/`);
  const { loading, error, data } = useAsync(getSubject);

  return { loading, error, data };
};

export default useGetSubject;
