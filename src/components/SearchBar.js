import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
    <div>
      <form>
        <label for='search'>Search</label>
          <input type="text" name='search' />
      </form>
    </div>)
  }
}

export default SearchBar;