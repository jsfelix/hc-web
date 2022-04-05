import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="text-gray-900 bg-white dark:bg-gray-900 dark:text-slate-100">
      <Head />
      <body className="container mx-auto p-4 min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
