import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/themes';
import '../styles/style.css';
import '../styles/reset.css';

class EnhancedApp extends App {
  static async getInitialProps({ Compopnent, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
    };
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
