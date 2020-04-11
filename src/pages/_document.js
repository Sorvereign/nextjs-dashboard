import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class EnhancedDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Sign</title>
          <link rel="icon" href="" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </html>
    );
  }
}
