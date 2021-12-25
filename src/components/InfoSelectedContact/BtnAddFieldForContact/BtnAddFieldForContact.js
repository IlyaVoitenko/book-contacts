import React from 'react';
import { useDispatch } from 'react-redux';
import { openCloseModalAddFiedToContact } from '../../../store/actionCreaters';

const BtnAddFieldForContact = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(openCloseModalAddFiedToContact(true))}>
      add Field
    </button>
  );
};
export default BtnAddFieldForContact;
