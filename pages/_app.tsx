import type { AppProps } from "next/app";
import "../src/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div dir="rtl" className="h-[100vh]">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
