import React from 'react';
import SearchResult from './SearchResult';

const SearchResultList = (props) => {
  const search_results = props.items.map((item) => {
     return <SearchResult key={item.id} item={item} />
  });
  return <div className="ui cards">{search_results}</div>;
}

export default SearchResultList;