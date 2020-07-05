import React from 'react';
import ReactDOM from 'react-dom';

const SearchResult = (props) => {
  const {name, hours, address1, address2, phone} = props.item;
  return (
    <div class="ui fluid card">
      <div class="content">
      <div class="header"> {name} </div>
        <div class="ui list">
          <div class="item">
            <i class="marker icon"></i>
            <div class="content">{address1}<br />{address2}</div>
          </div>
          <div class="item">
            <i class="phone icon"></i>
            <div class="content">{phone}</div>
          </div>
          <div class="item">
            <i class="clock icon"></i>
            <div class="content"> {hours} </div>
          </div>
        </div>

      </div>
    </div>
  );

};


export default SearchResult;