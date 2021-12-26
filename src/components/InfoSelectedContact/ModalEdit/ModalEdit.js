import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  openCloseModalEdit,
  deleteField,
  updateListObjectFields,
  updateListLastChanges,
} from '../../../store/actionCreaters';
import style from './ModalEdit.module.css';
import { getListObjectFields } from '../ListFieldsSelectedContact/selectors';
import { getEditField } from './selectors';

const ModalEdit = () => {
  const dispatch = useDispatch();
  const editField = useSelector(getEditField);
  const listFieldsselectedContact = useSelector(getListObjectFields);
  const nameForDelete = editField.fieldName;
  const [changedFieldName, setChangedFieldName] = useState(editField.fieldName);
  const [changedFieldValue, setChangedFieldValue] = useState(
    editField.fieldValue
  );
  //редактирование
  function AcceptEditing() {
    // копируем старое состояние массива
    dispatch(updateListLastChanges([...listFieldsselectedContact]));
    //удаляем старое поле
    dispatch(deleteField(nameForDelete));
    // добавление нового поля
    dispatch(
      updateListObjectFields([
        {
          fieldName: changedFieldName,
          fieldValue: changedFieldValue,
        },
      ])
    );
    dispatch(openCloseModalEdit(false));
  }
  //отмена редактирования
  function cancelEditing() {
    //очищение окна
    setChangedFieldName('');
    setChangedFieldValue('');
    dispatch(openCloseModalEdit(false));
  }

  return (
    <div className={style.container}>
      <p>
        name of field
        <input
          value={changedFieldName}
          onChange={({ target }) => {
            setChangedFieldName(target.value);
          }}
        ></input>
      </p>
      <p>
        value of field
        <input
          value={changedFieldValue}
          onChange={({ target }) => {
            setChangedFieldValue(target.value);
          }}
        ></input>
      </p>
      <br></br>
      <button onClick={() => AcceptEditing()}>Accept </button>
      <button onClick={() => cancelEditing()}>Cancel</button>
    </div>
  );
};
export default ModalEdit;
