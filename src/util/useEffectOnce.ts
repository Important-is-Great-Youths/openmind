import { useEffect } from "react";

export const useEffectOnce = (callback: any) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
