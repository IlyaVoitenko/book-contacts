import React from 'react';
import { useDispatch } from 'react-redux';

const ItemFieldsSelectedContact = ({ fieldContact }) => {
  const { fieldName, fieldValue } = fieldContact;
  const dispatch = useDispatch();
  return (
    <div>
      <span>{fieldName}</span> <span>{fieldValue}</span>
      <button onClick={() => {}}>delete the field</button>
    </div>
  );
};
export default ItemFieldsSelectedContact;
