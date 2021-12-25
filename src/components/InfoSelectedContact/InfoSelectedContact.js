import React from 'react';
import Header from '../Header';
import ListFieldsSelectedContact from './ListFieldsSelectedContact';
import useUpdateListFieldsContact from './useUpdateListFieldsContact';
import ModalAddFieldToContact from './ModalAddFieldToContact';
import BtnAddFieldForContact from './BtnAddFieldForContact';
import { openModalAddFieldToContact } from './selectors';
import { useSelector } from 'react-redux';
const InfoSelectedContact = () => {
  useUpdateListFieldsContact();
  const isOpenModalAddFieldToContact = useSelector(openModalAddFieldToContact);
  return (
    <div>
      <Header />
      <BtnAddFieldForContact />
      <div>
        <ListFieldsSelectedContact />
        {isOpenModalAddFieldToContact ? <ModalAddFieldToContact /> : null}
      </div>
    </div>
  );
};
export default InfoSelectedContact;
