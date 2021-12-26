import React from 'react';
import { useDispatch } from 'react-redux';
import {
  openCloseWindowConfirmationDeleting,
  confirmationDeleting,
  openCloseModalEdit,
  getFieldsForEditing,
} from '../../../store/actionCreaters';
const ItemFieldsSelectedContact = ({ fieldContact }) => {
  const { fieldName, fieldValue } = fieldContact;
  const dispatch = useDispatch();
  return (
    <div>
      <span>{fieldName}</span>&nbsp; <span>{fieldValue}</span>&nbsp;
      <button
        onClick={() => {
          dispatch(openCloseWindowConfirmationDeleting(true));
          dispatch(confirmationDeleting({ fieldName: fieldName }));
        }}
      >
        delete
      </button>
      <button
        onClick={() => {
          console.log({ fieldName: fieldName });
          dispatch(
            getFieldsForEditing({
              fieldName: fieldName,
              fieldValue: fieldValue,
            })
          );
          dispatch(openCloseModalEdit(true));
        }}
      >
        edit
      </button>
    </div>
  );
};
export default ItemFieldsSelectedContact;
