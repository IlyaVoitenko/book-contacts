import React from 'react';
import { useDispatch } from 'react-redux';
import { openCloseModalAddFiedToContact } from '../../../store/actionCreaters';

const BtnAddFieldForContact = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <br />
      <button onClick={() => dispatch(openCloseModalAddFiedToContact(true))}>
        add Field
      </button>
      <br />
      <br />
    </div>
  );
};
export default BtnAddFieldForContact;
