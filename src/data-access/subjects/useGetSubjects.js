import { useAsync } from "../../util/useAsync";
import { axiosInstance } from "../../util/axiosInstance";

export const useGetSubjects = () => {
  const getSubjects = () => axiosInstance.get("subjects/");
  const { loading, error, data } = useAsync(getSubjects);

  // 기본값 설정 (data가 undefined인 경우 빈 배열을 가진 객체로 초기화)
  const subjectsData = data || { results: [] };

  return { loading, error, data: subjectsData };
};
