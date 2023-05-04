import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WebCounterProvider } from "react-web-counter";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WebCounterProvider>
      <Component {...pageProps} />
    </WebCounterProvider>
  );
}
