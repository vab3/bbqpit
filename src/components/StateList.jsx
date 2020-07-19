import React from 'react';
import SearchResultList from './SearchResultList';
import search from '../api/restaurants';

const StateList = ({usstate}) => {
  console.log(`usstate ${usstate}`);
  let response = search(usstate);
  return (
    <div>
      <h1>SC BBQ Restaurants</h1>
      <SearchResultList items={response} />
    </div>
  );
};

export default StateList;
