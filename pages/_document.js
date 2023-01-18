import Meta from '../components/Meta'
import Document, { Html, Head, Main, NextScript, } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps
    }
  }
  
  render() {
    return (
      <Html lang='en'>
        <Meta />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument