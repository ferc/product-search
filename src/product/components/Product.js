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
          <section className="product-information">
            <div class="product-image-container">
              <img className="product-image" src={product.picture} />
            </div>

            <div className="product-description">
              <h2 className="product-description-title">Descripción</h2>
              <p className="product-description-text">{product.description}</p>
            </div>
          </section>

          <section className="product-checkout">
            <div className="product-status">
              <span>{this.formatMessage(product.condition)}</span>
              <span> - </span>
              <span>{this.formatNumber(product.sold_quantity)}</span>
              <span> vendidos</span>
            </div>
            <h1 className="product-title">{product.title}</h1>
            <div className="product-price">
              <span className="product-price-symbol">{product.price.currency}</span>
              <span className="product-price-fraction">{this.formatNumber(product.price.amount)}</span>
              <span className="product-price-decimals">{product.price.decimals}</span>
            </div>
            <div>
              <button type="button" className="checkout-button">Comprar</button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Product;
