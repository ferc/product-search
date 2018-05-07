import Head from 'next/head';
import React, { Component } from 'react';
import { SearchBar } from '../src/navigation';
import { initStore } from '../src/store';
import withRedux from '../utils/withRedux';

import './layout.scss';

class ProductSearchPage extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Mercado Libre Argentina</title>
          <meta name="description" content="La comunidad de compra y venta online más grande de América Latina." />
          <meta property="og:title" content="Mercado Libre Argentina" />
          <meta property="og:description" content="La comunidad de compra y venta online más grande de América Latina." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.mercadolibre.com.ar/" />
          <meta property="og:image" content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2" />
        </Head>

        <SearchBar />
      </div>
    );
  }
}

export default withRedux(initStore)(ProductSearchPage);
