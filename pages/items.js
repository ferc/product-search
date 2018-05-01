import React, { Component } from 'react';
import navigation, { CategoryBreadcrumb, SearchBar } from '../src/navigation';
import productSearch, { ProductList } from '../src/product-search';
import { initStore } from '../src/store';
import withRedux from '../utils/withRedux';

import './layout.scss';

class ProductListPage extends Component {
  static async getInitialProps({ query, store }) {
    await store.dispatch(productSearch.actions.fetchProducts(query.q));
  }

  render() {
    return (
      <div>
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
