import Document, { Head, Main, NextScript } from 'next/document'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../src/rootReducer';

import './_document.scss';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default class ProductSearchDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <link
            rel='stylesheet'
            href='/_next/static/style.css'
          />
        </Head>
        <body>
          <Provider store={store}>
            <Main />
          </Provider>

          <NextScript />
        </body>
      </html>
    )
  }
}
