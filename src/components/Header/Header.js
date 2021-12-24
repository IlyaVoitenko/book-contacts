import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Main Page</Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
