import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="font-serif">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link>
      </Head>
      <body className="text-slate-800 bg-white dark:text-slate-300 dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
