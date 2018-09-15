import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { globalStyles } from '../components/styles';

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <title>English Word Trainer</title>
          {this.props.styleTags}
          <link href="https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i&amp;subset=latin-ext" rel="stylesheet" />
          <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
