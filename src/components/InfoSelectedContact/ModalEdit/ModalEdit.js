import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  openCloseModalEdit,
  deleteField,
  updateListObjectFields,
} from '../../../store/actionCreaters';
import { getEditField } from './selectors';
const ModalEdit = () => {
  const dispatch = useDispatch();
  let editField = useSelector(getEditField);
  const [changedFieldName, setChangedFieldName] = useState(editField.fieldName);
  const [changedFieldValue, setChangedFieldValue] = useState(
    editField.fieldValue
  );

  return (
    <div>
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
      <button
        onClick={() => {
          dispatch(deleteField(editField.fieldName));
          dispatch(
            updateListObjectFields([
              {
                fieldName: changedFieldName,
                fieldValue: changedFieldValue,
              },
            ])
          );
          dispatch(openCloseModalEdit(false));
        }}
      >
        Accept{' '}
      </button>
      <button
        onClick={() => {
          setChangedFieldName('');
          setChangedFieldValue('');
          dispatch(openCloseModalEdit(false));
        }}
      >
        Cancel
      </button>
    </div>
  );
};
export default ModalEdit;
