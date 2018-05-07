import Head from 'next/head';
import React, { Component } from 'react';
import { CategoryBreadcrumb, SearchBar } from '../src/navigation';
import product, { Product } from '../src/product';
import { initStore } from '../src/store';
import withRedux from '../utils/withRedux';

import './layout.scss';

class ProductPage extends Component {
  static async getInitialProps({ query, store }) {
    await store.dispatch(product.actions.fetchProduct(query.id));
  }

  render() {
    const { product } = this.props;
    const decimals = product.price.decimals ? `,${product.price.decimals}` : '';
    const title = `${product.title} - ${product.price.currency} ${product.price.amount}${decimals} en Mercado Libre`;

    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta name="description" content="La comunidad de compra y venta online más grande de América Latina." />
          <meta property="og:title" content={title} />
          <meta property="og:description" content="La comunidad de compra y venta online más grande de América Latina." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.mercadolibre.com.ar/" />
          <meta property="og:image" content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2" />
        </Head>

        <SearchBar />

        <CategoryBreadcrumb categories={this.props.categories} />

        <Product product={this.props.product} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state[product.constants.NAME].categories,
  product: state[product.constants.NAME].product,
});

export default withRedux(initStore, mapStateToProps, null)(ProductPage);
