import React from 'react';
import Link from './Link';

const ListOfStates = () => {
  return (
    <div>
      <ul>
        <li>Georgia</li>
        <li>North Carolina</li>
        <li><Link href="/sc">South Carolina</Link></li>
      </ul>
    </div>
  );
};

export default ListOfStates;