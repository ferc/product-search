import Head from 'next/head';
import React, { Component } from 'react';
import navigation, { CategoryBreadcrumb, SearchBar } from '../src/navigation';
import productSearch, { ProductList } from '../src/product-search';
import { initStore } from '../src/store';
import withRedux from '../utils/withRedux';

import './layout.scss';

class ProductListPage extends Component {
  static async getInitialProps({ query, store }) {
    await store.dispatch(productSearch.actions.fetchProducts(query.search));
  }

  toTitleCase = (str) =>
    str.replace(/\w\S*/g, (txt) => `${txt.charAt(0).toUpperCase()}${txt.substr(1).toLowerCase()}`);

  render() {
    const titleQuery = this.toTitleCase(this.props.query);
    const title = `${titleQuery} En Mercado Libre Argentina`;

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

        <SearchBar query={this.props.query} />

        <CategoryBreadcrumb categories={this.props.categories} />

        <ProductList products={this.props.products} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state[productSearch.constants.NAME].categories,
  products: state[productSearch.constants.NAME].products,
  query: state[navigation.constants.NAME].query,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: productSearch.actions.fetchProducts,
});

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(ProductListPage);
