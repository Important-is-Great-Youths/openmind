import { useAsync } from "../util/useAsync";
import { axiosInstance } from "../util/axiosInstance";

export const useGetQuestion = () => {
  const getQuestion = () => axiosInstance.get("questions");
  const { loading, error, data } = useAsync(getQuestion);
  return { loading, error, data };
};
