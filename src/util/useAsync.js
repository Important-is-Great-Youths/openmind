import { useState } from "react";
import { useEffectOnce } from "./useEffectOnce";
// 비동기 함수를 받아 해당 함수 실행 후 실행 중 여부, 오류 여부, 데이터 저장 상태 관리
export const useAsync = (asyncFunction) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const execute = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await asyncFunction();
      setData(response?.data);
      return response;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffectOnce(execute);

  return { execute, loading, error, data };
};
