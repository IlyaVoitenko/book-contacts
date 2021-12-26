import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateListObjectFields } from '../../store/actionCreaters';
const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <ul>
        <button
          onClick={() => {
            dispatch(updateListObjectFields([]));
          }}
        >
          <Link to="/">Main Page</Link>
        </button>
      </ul>
    </header>
  );
};
export default Header;
