import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };
  
  onSearchSubmit = async term => {
    console.log(term);
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  }
  // returning a promise example
  // onSearchSubmit(term) {
  //   console.log(term);
  //   axios.get('https://api.unsplash.com/search/photos', {
  //     params: { query: term },
  //     headers: {
  //       Authorization: 'Client-ID 8d2217b97020584c4f29b91bbf89c32517b632d1fe2294e27f853af1ff108860',
  //     }
  //   }).then((response) => {
  //     console.log(response.data.results.length);
  //   })
  // }
  render() {
    return (
      <div className="ui container" style={{ marginTop: '1rem' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images.
      </div>
    );
  }  
}

export default App;