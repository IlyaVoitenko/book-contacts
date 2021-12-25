import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './ModalСonfirmationDeleting.module.css';
import {
  openCloseWindowConfirmationDeleting,
  deleteContact,
  deleteField,
} from '../../store/actionCreaters';
import { getConfirmationDeleting } from './selectors.js';
const ModalСonfirmationDeleting = () => {
  const dispatch = useDispatch();
  const confirmationDeleting = useSelector(getConfirmationDeleting);
  const { id, fieldName } = confirmationDeleting;
  function deleteSelectedContact(id, fieldName) {
    if (id !== undefined) {
      console.log(true);
      dispatch(deleteContact(id));
      dispatch(openCloseWindowConfirmationDeleting(false));
    }
    dispatch(deleteField(fieldName));
    dispatch(openCloseWindowConfirmationDeleting(false));
  }
  return (
    <div className={style.container}>
      Do you want to delete ?
      <button onClick={() => deleteSelectedContact(id, fieldName)}>
        eccept
      </button>
      <button
        onClick={() => {
          dispatch(openCloseWindowConfirmationDeleting(false));
        }}
      >
        cancel
      </button>
    </div>
  );
};
export default ModalСonfirmationDeleting;
