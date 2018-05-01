import React, { Component } from 'react';
import { SearchBar } from '../src/navigation';
import { initStore } from '../src/store';
import withRedux from '../utils/withRedux';

import './layout.scss';

class ProductSearchPage extends Component {
  render() {
    return (
      <SearchBar />
    );
  }
}

export default withRedux(initStore)(ProductSearchPage);
