import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class EnhancedDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Sign</title>
          <link rel="icon" href="" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
	    <div dangerouslySetInnerHTML={{ __html: SVG_SPRITE }} />
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </html>
    );
  }
}

EnhancedDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render
  // source: https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js#L27

  const sheets = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collectStyles(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,

    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
