import React from 'react';
import { useDispatch } from 'react-redux';
import style from './ModalAddFieldToContact.module.css';
import {
  openCloseModalAddFiedToContact,
  updateListObjectFields,
} from '../../../store/actionCreaters';
const ModalAddFieldToContact = () => {
  const dispatch = useDispatch();
  // let для возмоэности изменения поля
  let fieldName = '';
  let fieldValue = '';
  return (
    <div className={style.container}>
      <button
        className={style.btnClose}
        onClick={() => dispatch(openCloseModalAddFiedToContact(false))}
      >
        &#10006;
      </button>
      <p> add field of a contact</p>
      <label>
        field name :
        <input onChange={({ target }) => (fieldName = target.value)}></input>
      </label>
      <br></br>
      <label>
        field value :
        <input onChange={({ target }) => (fieldValue = target.value)}></input>
      </label>
      <br></br>
      <button
        onClick={() => {
          dispatch(
            updateListObjectFields([
              {
                fieldName: fieldName,
                fieldValue: fieldValue,
              },
            ])
          );
          dispatch(openCloseModalAddFiedToContact(false));
        }}
      >
        Add
      </button>
    </div>
  );
};
export default ModalAddFieldToContact;
