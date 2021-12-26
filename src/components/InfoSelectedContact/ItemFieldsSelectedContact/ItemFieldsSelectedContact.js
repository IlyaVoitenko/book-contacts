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

  function editCurrentField() {
    dispatch(
      getFieldsForEditing({
        fieldName: fieldName,
        fieldValue: fieldValue,
      })
    );
    dispatch(openCloseModalEdit(true));
  }

  function deleteCurrentField() {
    dispatch(openCloseWindowConfirmationDeleting(true));
    dispatch(confirmationDeleting({ fieldName: fieldName }));
  }
  return (
    <div>
      <span>{fieldName}</span>&nbsp; <span>{fieldValue}</span>&nbsp;
      <button onClick={() => deleteCurrentField()}>delete</button>
      <button onClick={() => editCurrentField()}>edit</button>
    </div>
  );
};
export default ItemFieldsSelectedContact;
