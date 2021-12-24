import React from 'react';
import { useDispatch } from 'react-redux';
import style from './ItemContact.module.css';
import { deleteContact } from '../../../../../store/actionCreaters';
const ItemContact = ({ contact }) => {
  const { id, name, surname, address, email, phoneNumber } = contact;
  const dispatch = useDispatch();
  return (
    <tr>
      <td className={style.tdTable}>{name}</td>
      <td className={style.tdTable}>{surname}</td>
      <td className={style.tdTable}>{address}</td>
      <td className={style.tdTable}>{email}</td>
      <td className={style.tdTable}>{phoneNumber}</td>
      <td className={style.tdTable}>
        <button> &#9998;</button>
      </td>
      <td className={style.tdTable}>
        <button
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        >
          &#10006;
        </button>
      </td>
    </tr>
  );
};
export default ItemContact;
