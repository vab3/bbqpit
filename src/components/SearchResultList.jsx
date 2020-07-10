import React from 'react';
import SearchResult from './SearchResult';


const SearchResultList = (props) => {
  console.log(`props .items ${props.items}`)
  if(props.items !== undefined) {
    const search_results = props.items.map((item) => {
       return <SearchResult key={item.id} item={item} />
    });
    return <div className="ui cards">{search_results}</div>;
  }
}

export default SearchResultList;