import React, { Component } from 'react';

import './SearchBar.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }

  onQueryChange = query => this.setState({ query });

  onSearch = event => {
    event.preventDefault();
  }

  render() {
    return (
      <header className="nav-header" role="banner">
        <div className="nav-bounds">
          <a className="nav-logo" href="/" tabIndex="1"></a>

          <form className="nav-search" role="search" onSubmit={this.onSearch}>
            <input
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              className="nav-search-input"
              maxLength="120"
              name="text"
              onChange={this.onQueryChange}
              placeholder="Buscar productos, marcas y más..."
              spellCheck="false"
              tabIndex="1"
              type="text"
              value={this.state.query}
            />

            <button type="submit" className="nav-search-btn">
              <i className="nav-icon-search"><span>Buscar</span></i>
            </button>
          </form>
        </div>
      </header>
    );
  }
}

export default SearchBar;
