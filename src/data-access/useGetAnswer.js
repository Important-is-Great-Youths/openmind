import { useAsync } from "../util/useAsync";
import { axiosInstance } from "../util/axiosInstance";

export const useGetAnswer = () => {
  const getAnswer = () => axiosInstance.get("answers");
  const { loading, error, data } = useAsync(getAnswer);
  return { loading, error, data };
};
