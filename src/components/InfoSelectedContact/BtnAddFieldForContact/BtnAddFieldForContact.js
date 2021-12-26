import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  openCloseModalAddFiedToContact,
  updateListLastChanges,
} from '../../../store/actionCreaters';
import { getListObjectFields } from '../ListFieldsSelectedContact/selectors';

const BtnAddFieldForContact = () => {
  const dispatch = useDispatch();
  const listFieldsselectedContact = useSelector(getListObjectFields);
  return (
    <button
      onClick={() => {
        //соханение предыдущего состояния
        dispatch(updateListLastChanges([...listFieldsselectedContact]));
        dispatch(openCloseModalAddFiedToContact(true));
      }}
    >
      add Field
    </button>
  );
};
export default BtnAddFieldForContact;
