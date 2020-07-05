import React from 'react';

class SearchBar extends React.Component {
  state = { searchTerm: '' };

  onFormSubmit(event) {
    event.preventDefault();

    console.log(this.state.term);
  }



  render () {
    return (
      <div className="ui segment">
        <form onSubmit={e => this.onFormSubmit(e)} className="ui form">
          <div className="ui fluid icon input">
            <i className="search icon"></i>
            <input 
              type="text"
              value ={this.state.term}
              onChange={e => this.setState({ searchTerm: e.target.value })}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;