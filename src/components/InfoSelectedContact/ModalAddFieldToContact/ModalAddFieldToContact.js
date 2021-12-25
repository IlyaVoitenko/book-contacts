import React from 'react';
import { useDispatch } from 'react-redux';
import { openCloseModalAddFiedToContact } from '../../../store/actionCreaters';
const ModalAddFieldToContact = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(openCloseModalAddFiedToContact(false))}>
        &#10006;
      </button>
      add field of a contact
      <label>
        <input></input>
      </label>
      <label>
        <input></input>
      </label>
    </div>
  );
};
export default ModalAddFieldToContact;
