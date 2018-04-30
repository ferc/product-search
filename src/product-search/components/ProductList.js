import React, { Component } from 'react';

import './ProductList.scss';

class ProductList extends Component {
  render() {
    return (
      <div className="search-results-container">
        <ol className="search-results">
          <li className="results-item">
            <div className="item-image">
              <a
                href="https://articulo.mercadolibre.com.ar/MLA-672160044-celular-libre-apple-iphone-6-gris-32gb-_JM"
                className="item-image-link"
              >
                <img
                  alt="Celular Libre Apple Iphone 6 Gris 32gb"
                  height="160"
                  src="https://http2.mlstatic.com/iphone-D_Q_NP_736895-MLA25705832447_062017-X.webp"
                  width="160"
                />
              </a>
            </div>

            <div className="item-information">
              <div>
                <div className="item-price-shipping">
                  <div className="item-price">
                    <span className="item-price-symbol">$</span>
                    <span className="item-price-fraction">14.999</span>
                    <span className="item-price-decimals">99</span>
                  </div>

                  <div className="item-shipping-free">
                    <img srcSet="/static/ic_shipping.png 1x, /static/ic_shipping@2x.png 2x" />
                  </div>
                </div>

                <h2 className="item-title">
                  <a
                    href="https://articulo.mercadolibre.com.ar/MLA-672160044-celular-libre-apple-iphone-6-gris-32gb-_JM"
                    className="item-title-link">
                    <span className="item-title-text">Celular Libre Apple Iphone 6 Gris 32gb</span>
                  </a>
                </h2>
              </div>

              <div className="item-location">
                <span>Capital Federal</span>
              </div>
            </div>
          </li>
        </ol>
      </div>
    );
  }
}

export default ProductList;
