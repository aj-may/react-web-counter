import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, PropsWithChildren, useEffect } from "react";

type WebCounterProviderProps = {
  api?: string;
};

const DEFAULT_API_URL = "http://localhost:3001/api/count";
export const apiContext = createContext<string>(DEFAULT_API_URL);
export const queryContext = createContext<QueryClient | undefined>(undefined);
const queryClient = new QueryClient();

export const WebCounterProvider = ({
  children,
  api = DEFAULT_API_URL,
}: PropsWithChildren<WebCounterProviderProps>) => {
  useEffect(() => {
    fetch(api, { method: "POST" }).catch((err) =>
      console.error("WebCounterError", err)
    );
  }, []);

  return (
    <apiContext.Provider value={api}>
      <QueryClientProvider client={queryClient} context={queryContext}>
        {children}
      </QueryClientProvider>
    </apiContext.Provider>
  );
};
