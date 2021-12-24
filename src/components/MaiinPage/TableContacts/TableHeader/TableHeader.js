import React from 'react';
import style from '../ListContacts/ItemContact/ItemContact.module.css';
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th className={style.tdTable}>Name</th>
        <th className={style.tdTable}>Surname</th>
        <th className={style.tdTable}>Address</th>
        <th className={style.tdTable}>Email</th>
        <th className={style.tdTable}>Phone number</th>
        <th className={style.tdTable}>Edit</th>
        <th className={style.tdTable}>Delete</th>
      </tr>
    </thead>
  );
};
export default TableHeader;
