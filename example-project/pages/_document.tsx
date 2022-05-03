import Document, { Html, Head, Main, NextScript } from "next/document";


export default class _Document extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
            rel="stylesheet"
          />
          <title>Example Project</title>
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}