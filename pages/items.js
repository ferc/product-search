import React, { Component } from 'react';
import { CategoryBreadcrumb, SearchBar } from '../src/navigation';
import { ProductList } from '../src/product-search';

class ProductListPage extends Component {
  render() {
    return (
      <div>
        <SearchBar />

        <CategoryBreadcrumb />

        <ProductList />
      </div>
    );
  }
}

export default ProductListPage;
