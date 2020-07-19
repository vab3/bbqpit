import React from 'react';
import Link from './Link';

const Footer = () => {
  return (
    <div>
      <Link href="/">Home</Link> |&nbsp;
      <Link href="/states">List By State</Link>
    </div>
  );
}

export default Footer;
