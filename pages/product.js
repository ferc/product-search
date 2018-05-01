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
    return (
      <div>
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
