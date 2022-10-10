import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { useEffect, useState } from "react";

type Props = {
  setState: any;
  apiFunc: any;
  select?: any;
  type?: "first" | "update";
};

const useAPICall = ({ setState, apiFunc, select, type = "first" }: Props) => {
  const state = useAppSelector(select);
  const dispatch = useAppDispatch();
  const [result, setResult] = useState();
  useEffect(() => {
    if ((state == null && type == "first") || type == "update") {
      const apiCall = async () => {
        const result = await apiFunc();
        dispatch(setState(result?.data));
        setResult(result);
      };
      apiCall();
    }
  });

  return result;
};

export default useAPICall;
