import { axiosInstance } from "../../util/axiosInstance";
import { useAsync } from "../../util/useAsync";

const useGetSubject = (subjectId) => {
  const getSubject = () => axiosInstance.get(`subjects/${subjectId}/`);
  const { loading, error, data } = useAsync(getSubject);

  return { loading, error, data };
};

export default useGetSubject;
