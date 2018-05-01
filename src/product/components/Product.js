import React, { Component } from 'react';

import './Product.scss';

class Product extends Component {
  formatMessage(condition) {
    const conditions = {
      'new': 'Nuevo',
      used: 'Usado',
    };

    return conditions[condition] || condition;
  }

  formatNumber(n) {
    return n.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1\.');
  }

  render() {
    const { product } = this.props;

    return (
      <div className="product-container">
        <div className="product">
          <div className="product-information">
            <div className="product-image">
              <img src={product.picture} />
            </div>

            <div className="product-description">
              <div className="product-description-title">Descripción</div>
              <div className="product-description-text">
                <pre>{product.description}</pre>
              </div>
            </div>
          </div>

          <div className="product-checkout">
            <div className="product-status">
              <span>{this.formatMessage(product.condition)}</span>
              <span> - </span>
              <span>{this.formatNumber(product.sold_quantity)}</span>
              <span> vendidos</span>
            </div>
            <div className="product-title">{product.title}</div>
            <div className="product-price">
              <span className="product-price-symbol">{product.price.currency}</span>
              <span className="product-price-fraction">{this.formatNumber(product.price.amount)}</span>
              <span className="product-price-decimals">{product.price.decimals}</span>
            </div>
            <div></div>
          </div>
        </div>
      <div>{this.props.product.title}</div>
      </div>
    );
  }
}

export default Product;
