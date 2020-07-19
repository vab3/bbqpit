import React from "react";

const SearchResult = (props) => {
  const { id, name, hours, address1, address2, phone } = props.item;
  return (
    <div className="ui fluid card">
      <a className="content" href={`/restaurant/${id}`}>
        <div className="content">
          <div className="header"> {name} </div>
          <div className="ui list">
            <div className="item">
              <i className="marker icon"></i>
              <div className="content">
                {address1}
                <br />
                {address2}
              </div>
            </div>
            <div className="item">
              <i className="phone icon"></i>
              <div className="content">{phone}</div>
            </div>
            <div className="item">
              <i className="clock icon"></i>
              <div className="content"> {hours} </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SearchResult;
