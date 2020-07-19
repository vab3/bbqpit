import React from 'react';
import SearchResult from './SearchResult';


const SearchResultList = (props) => {
  console.log(`props .items ${props.items}`)
  if(props.items !== undefined) {
    const search_results = props.items.map((item) => {
       return <SearchResult key={item.id} item={item} />
    });
    return (
      <div>
        { props.items.length > 0 &&
          <div>
            Found {props.items.length} restaurants. 
          </div>
        }
        <div className="ui cards">
          {search_results}
        </div>
      </div>
    )
  }
}

export default SearchResultList;
