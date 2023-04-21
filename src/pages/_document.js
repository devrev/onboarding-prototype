import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en" className="light">
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="The DevRev App Onboarding" />
        <Script src="/static/index.js" strategy="lazyOnload"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
