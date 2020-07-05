import React from 'react';
import SearchBar from './SearchBar';
import SearchResultList from './SearchResultList';
import restaurants from '../api/restaurants';


class App extends React.Component {


  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <div>
          <SearchResultList items={restaurants} />
        </div>
      </div>
    );
  }


}

export default App;