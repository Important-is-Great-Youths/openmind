import { useAsync } from "../util/useAsync";
import { axiosInstance } from "../util/axiosInstance";

export const useGetSubject = () => {
  const getSubject = () => axiosInstance.get("answers");
  const { loading, error, data } = useAsync(getSubject);
  return { loading, error, data };
};
