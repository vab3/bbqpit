import React from 'react';
import {find_by_id} from '../api/restaurants';

// const Restaurant= () => {
  
// }
  


  

const Restaurant = () => {

  const url = window.location.pathname
  console.log(url);
  const id = url.match(/^\/restaurant\/(\d+)/)[1];
  console.log(`id ${id}`);
  const restaurant = find_by_id(id);



  console.log(`window.location ${window.location}`)
  return (
    <div>
      <h1> {restaurant.name} </h1>
       <div className="ui container">
         <div className="ui list">
           <div className="item">
             <i className="marker icon"></i>
             <div className="content">{restaurant.address1}<br />{restaurant.address2}</div>
           </div>
           <div className="item">
             <i className="phone icon"></i>
             <div className="content">{restaurant.phone}</div>
           </div>
           <div className="item">
             <i className="clock icon"></i>
             <div className="content"> {restaurant.hours} </div>
           </div>
           { restaurant.website &&
             <div className="item">
               <i className="external url icon"></i>
               <div className="content">
                 <a target="new" href={`http://${restaurant.website}`}>{restaurant.website}</a>
               </div>
             </div>
           }
         </div>
       </div>
     </div>
  )
};

export default Restaurant;
