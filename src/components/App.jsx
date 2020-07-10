import React from 'react';
import SearchBar from './SearchBar';
import SearchResultList from './SearchResultList';
import search from '../api/restaurants';


class App extends React.Component {

  state = {searchResults: []};

  onSearchSubmit = (term) => {
    console.log(`onsearchsubmit term ${term}`)
    let response = search(term);
    this.setState({ searchResults: response});
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <div style={{textAlign: 'center'}}>
        <img width='200px' alt='pig logo' src='bbqpit-logo-tagline-blk.png'/>
        </div>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <div>
          Found {this.state.searchResults.length} restaurants. 
          <SearchResultList items={this.state.searchResults} />
        </div>
      </div>
    );
  }


}

export default App;