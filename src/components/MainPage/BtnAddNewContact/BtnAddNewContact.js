import React from 'react';
import { useDispatch } from 'react-redux';
import { openCloseModalWindow } from '../../../store/actionCreaters';
const BtnAddNewContact = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(openCloseModalWindow(true))}>
      Add a new contact
    </button>
  );
};
export default BtnAddNewContact;
