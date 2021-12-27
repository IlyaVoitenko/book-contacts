import React from 'react';
import style from './ModalCreateContact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedContact } from '../../InfoSelectedContact/ListFieldsSelectedContact/selectors';
import {
  updateContact,
  addContactToList,
  openCloseModalWindow,
} from '../../../store/actionCreaters';
const ModalCreateContact = () => {
  const dispatch = useDispatch();
  const contact = useSelector(getSelectedContact);
  const { id, name, surname, email, phoneNumber, address } = contact;
  //создаем id для нового контакта
  const countId = id + 1;
  function addNewContact() {
    dispatch(updateContact((contact.id = +countId)));
    dispatch(addContactToList({ ...contact }));
    dispatch(openCloseModalWindow(false));
  }
  return (
    <div className={style.container}>
      <button
        className={style.btnCloseModal}
        onClick={() => dispatch(openCloseModalWindow(false))}
      >
        &#10006;
      </button>
      <br />
      <label>
        Name:
        <br />
        <input
          type="text"
          value={name}
          onChange={({ target }) => {
            //регулярное выражение дял блокировки ввода цифр
            target.value = target.value.replace(/[^a-zа-яё\s]/gi, '');
            dispatch(updateContact({ name: target.value }));
          }}
        ></input>
      </label>
      <br />
      <label>
        Surname:
        <br />
        <input
          type="text"
          value={surname}
          onChange={({ target }) => {
            //регулярное выражение дял блокировки ввода цифр
            target.value = target.value.replace(/[^a-zа-яё\s]/gi, '');
            dispatch(updateContact({ surname: target.value }));
          }}
        ></input>
      </label>
      <br />
      <label>
        Email:
        <br />
        <input
          type="text"
          value={email}
          onChange={({ target }) =>
            dispatch(updateContact({ email: target.value }))
          }
        ></input>
      </label>
      <br />
      <label>
        Phone number:
        <br />
        <input
          type="text"
          value={phoneNumber}
          onChange={({ target }) => {
            //регулярное выражение дял блокировки ввода букв
            target.value = target.value.replace(/[^0-9\.\,]/g, '');
            dispatch(updateContact({ phoneNumber: target.value }));
          }}
        ></input>
      </label>
      <br />
      <label>
        Address:
        <br />
        <input
          type="text"
          value={address}
          onChange={({ target }) =>
            dispatch(updateContact({ address: target.value }))
          }
        ></input>
      </label>
      <br />
      <button onClick={() => addNewContact()}>Add</button>
    </div>
  );
};
export default ModalCreateContact;
