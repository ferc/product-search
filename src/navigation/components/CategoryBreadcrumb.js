import React, { Component } from 'react';

import './CategoryBreadcrumb.scss';

class CategoryBreadcrumb extends Component {
  render() {
    let categories;
    if (this.props.categories.length) {
      categories = this.props.categories
        .map((category, i) =>
          <span className="breadcrumb-category" key={i}>{category}</span>
        )
        .reduce((prev, curr, i) => [
          prev,
          <span className="breadcrumb-separator" key={`${i}-separator`}>></span>,
          curr
        ]);
    }

    return (
      <div className="breadcrumb-container">
        <span className="breadcrumb-text">
          {categories}
        </span>
      </div>
    );
  }
}

export default CategoryBreadcrumb;
