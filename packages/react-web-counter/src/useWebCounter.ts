import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { apiContext, queryContext } from "./WebCounterProvider";

export const useWebCounter = () => {
  const api = useContext(apiContext);
  const { data: count, ...rest } = useQuery({
    queryKey: ["count"],
    queryFn: async () => {
      const res = await fetch(api);
      const text = await res.text();
      return parseInt(text);
    },
    context: queryContext,
  });

  return { count, ...rest };
};
