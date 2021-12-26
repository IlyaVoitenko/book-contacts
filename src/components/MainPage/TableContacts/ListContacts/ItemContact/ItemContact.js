import React from 'react';
import { useDispatch } from 'react-redux';
import style from './ItemContact.module.css';
import { Link } from 'react-router-dom';
import {
  openCloseWindowConfirmationDeleting,
  updateSelectedContact,
  updateContact,
  confirmationDeleting,
} from '../../../../../store/actionCreaters';

const ItemContact = ({ contact }) => {
  const { id, name, surname, address, email, phoneNumber } = contact;
  console.log('ItemContact', contact);
  const dispatch = useDispatch();
  return (
    <tr>
      <td className={style.tdTable}>{name}</td>
      <td className={style.tdTable}>{surname}</td>
      <td className={style.tdTable}>{address}</td>
      <td className={style.tdTable}>{email}</td>
      <td className={style.tdTable}>{phoneNumber}</td>
      <td className={style.tdTable}>
        <Link to="/selectedContact">
          <button
            onClick={() => {
              dispatch(updateContact({ ...contact }));
            }}
          >
            &#9998;
          </button>
        </Link>
      </td>
      <td className={style.tdTable}>
        <button
          onClick={() => {
            dispatch(updateSelectedContact({ id: id }));
            dispatch(confirmationDeleting({ id: id }));
            dispatch(openCloseWindowConfirmationDeleting(true));
          }}
        >
          &#10006;
        </button>
      </td>
    </tr>
  );
};
export default ItemContact;
