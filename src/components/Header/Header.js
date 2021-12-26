import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearListFields } from '../../store/actionCreaters';
const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <ul>
        <button
          onClick={() => {
            //clear  ListFields
            dispatch(clearListFields(clearListFields()));
          }}
        >
          <Link to="/">Main Page</Link>
        </button>
      </ul>
    </header>
  );
};
export default Header;
