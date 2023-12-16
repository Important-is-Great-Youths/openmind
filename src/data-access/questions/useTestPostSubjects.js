import { useAsync } from "../../util/useAsync";
import { axiosInstance } from "../../util/axiosInstance";

const useTestPostSubjects = (subjectId) => {
  const body = {
    "content": "무슨 강아지를 가장 좋아하시나요?"
  };
  const getSubjects = () => axiosInstance.post(`subjects/1281/questions/`, body);
  console.log(getSubjects)
  const { loading, error, data } = useAsync(getSubjects);

  const subjectsData = data || { results: [] };

  console.log(subjectsData)

  return { loading, error, data: subjectsData };
};

export default useTestPostSubjects
