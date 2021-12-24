import React from 'react';
import style from './ItemContact.module.css';
const ItemContact = ({ contact }) => {
  const { name, surname, address, email, phoneNumber } = contact;
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
        <button> &#10006;</button>
      </td>
    </tr>
  );
};
export default ItemContact;
