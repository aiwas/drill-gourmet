import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Noto_Sans_JP } from "@next/font/google";

const notoSansJP = Noto_Sans_JP({ weight: "400", style: "normal", subsets: ["japanese", "latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>大卒ドリルのグルメ情報館</title>
        <meta name="title" content="大卒ドリルのグルメ情報館" />
        <meta name="description" content="大卒ドリルのグルメ情報を配信しています。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="root" className="grid min-h-screen grid-cols-1 bg-gray-900" style={notoSansJP.style} >
        <Component {...pageProps} />
      </div>
    </>
  );
}
