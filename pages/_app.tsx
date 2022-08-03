import type { AppProps } from "next/app";
import Head from "next/head";
import "../src/styles/globals.css";
import "../src/styles/homePage.css";
import "../src/styles/swiper.css";
import { persistore, store } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "../src/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div dir="rtl" className="h-[100vh]">
        <Provider store={store}>
          <PersistGate persistor={persistore}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PersistGate>
        </Provider>
      </div>
    </>
  );
}

export default MyApp;
