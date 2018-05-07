import Document, { Head, Main, NextScript } from 'next/document';

export default class ProductSearchDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"/>

          <link rel="shortcut icon" href="/static/favicon.ico" />

          <link
            rel='stylesheet'
            href='https://http2.mlstatic.com/ui/webfonts/v2.0.0/proxima-nova/300-400-600-700.woff2.css'
          />
          <link
            rel='stylesheet'
            href='/_next/static/style.css'
          />
        </Head>
        <body>
          <Main />

          <NextScript />
        </body>
      </html>
    )
  }
}
