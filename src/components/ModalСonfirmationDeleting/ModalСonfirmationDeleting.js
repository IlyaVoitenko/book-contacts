import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './ModalСonfirmationDeleting.module.css';
import {
  openCloseWindowConfirmationDeleting,
  deleteContact,
} from '../../store/actionCreaters';
import { getSelectedContact } from './selectors';
const ModalСonfirmationDeleting = () => {
  const dispatch = useDispatch();
  const selectedContact = useSelector(getSelectedContact);
  const { id } = selectedContact;

  function deleteSelectedContact(id) {
    dispatch(deleteContact(id));
    dispatch(openCloseWindowConfirmationDeleting(false));
  }
  return (
    <div className={style.container}>
      Do you want to delete the contact?
      <button onClick={() => deleteSelectedContact(id)}>eccept</button>
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
