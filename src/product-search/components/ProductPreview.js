import Link from 'next/link';
import React, { Component } from 'react';

import './ProductPreview.scss';

class ProductPreview extends Component {
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
      <li className="results-item">
        <div className="item-image">
          <Link href={`/items/${product.id}`}>
            <a className="item-image-link">
              <img
                alt={product.title}
                height="160"
                src={product.picture}
                width="160"
              />
            </a>
          </Link>
        </div>

        <div className="item-information">
          <div>
            <div className="item-price-shipping">
              <div className="item-price">
                <span className="item-price-symbol">{product.price.currency}</span>
                <span className="item-price-fraction">{this.formatNumber(product.price.amount)}</span>
                <span className="item-price-decimals">{product.price.decimals}</span>
              </div>

              {product.free_shipping && <div className="item-shipping-free">
                <img srcSet="/static/ic_shipping.png 1x, /static/ic_shipping@2x.png 2x" />
              </div>}
            </div>

            <h2 className="item-title">
              <Link href={`/items/${product.id}`}>
                <a className="item-title-link">
                  <span className="item-title-text">{product.title}</span>
                </a>
              </Link>
            </h2>
          </div>

          <div className="item-condition">
            <span>{this.formatMessage(product.condition)}</span>
          </div>
        </div>
      </li>
    );
  }
}

export default ProductPreview;
