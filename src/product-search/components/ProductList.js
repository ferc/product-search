import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductPreview from './ProductPreview';
import { NAME } from '../constants';

import './ProductList.scss';

class ProductList extends Component {
  render() {
    return (
      <div className="search-results-container">
        <ol className="search-results">
          {this.props.products.map((product, i) => <ProductPreview key={i} product={product} />)}
        </ol>
      </div>
    );
  }
}

export default ProductList;
