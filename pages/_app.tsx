import type { AppProps } from "next/app";
import Head from "next/head";
import "../src/styles/globals.css";
import "../src/styles/homePage.css";
import "../src/styles/swiper.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div dir="rtl" className="h-[100vh]">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
