import React from 'react';
import { useDispatch } from 'react-redux';
import { openCloseModalWindow } from '../../../store/actionCreaters';
const BtnAddNewContact = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(openCloseModalWindow(true))}>
      Add a new Contact
    </button>
  );
};
export default BtnAddNewContact;
