import type { AppProps } from "next/app";
import "../globals.css";
import { GlobalLayout } from "./layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}
