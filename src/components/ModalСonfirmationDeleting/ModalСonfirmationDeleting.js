import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './ModalСonfirmationDeleting.module.css';
import {
  openCloseWindowConfirmationDeleting,
  updateListLastChanges,
  deleteContact,
  deleteField,
} from '../../store/actionCreaters';
import { getConfirmationDeleting } from './selectors';
import { getListObjectFields } from '../InfoSelectedContact/ListFieldsSelectedContact/selectors';

const ModalСonfirmationDeleting = () => {
  const dispatch = useDispatch();
  const confirmationDeleting = useSelector(getConfirmationDeleting);
  const listFieldsselectedContact = useSelector(getListObjectFields);
  const { id, fieldName } = confirmationDeleting;

  function deleteSelectedContact(id, fieldName) {
    // удаление контакта
    if (id !== undefined) {
      dispatch(deleteContact(id));
      dispatch(openCloseWindowConfirmationDeleting(false));
    }
    // удаление поля
    dispatch(updateListLastChanges([...listFieldsselectedContact]));
    dispatch(deleteField(fieldName));
    dispatch(openCloseWindowConfirmationDeleting(false));
  }

  return (
    <div className={style.container}>
      Do you want to delete ?
      <button
        onClick={() => {
          deleteSelectedContact(id, fieldName);
        }}
      >
        accept
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
