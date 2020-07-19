import React from 'react';
import SearchBar from './SearchBar';
import SearchResultList from './SearchResultList';
import search from '../api/restaurants';
import Footer from './Footer';
import Route from './Route';
import ListOfStates from './ListOfStates';
import StateList from './StateList';
import Restaurant from './Restaurant';


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
        <div className="ui one column grid">
          <div className="row centered" >
          <a href="/">
            <img alt='pig logo' src='/bbqpit-logo-tagline-blk.png'/>
          </a>
          </div>
          <div className="row">
            <div className="column">
              <Route path="/">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <SearchResultList items={this.state.searchResults} />
              </Route>
              <Route path="/states">
                <ListOfStates />
              </Route>
              <Route path="/sc">
                <StateList usstate="sc" />
              </Route>
              <Route path="/restaurant/">
                <Restaurant />
              </Route>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }


}

export default App;
