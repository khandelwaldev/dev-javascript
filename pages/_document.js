import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"
        ></link>
      </Head>
      <body className="max-w-[672px] w-full mx-auto px-5 bg-[#011627] text-[#f6f7f8]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
