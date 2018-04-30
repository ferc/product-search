import React, { Component } from 'react';

import './CategoryBreadcrumb.scss';

class CategoryBreadcrumb extends Component {
  render() {
    return (
      <div className="breadcrumb-container">
        <span className="breadcrumb-text">
          <span className="breadcrumb-category">Celulares y Teléfonos</span>
          <span className="breadcrumb-separator">></span>
          <span className="breadcrumb-category">Celulares y Smartphones</span>
          <span className="breadcrumb-separator">></span>
          <span className="breadcrumb-category">iPhone</span>
        </span>
      </div>
    );
  }
}

export default CategoryBreadcrumb;
