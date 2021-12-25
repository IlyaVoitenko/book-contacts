import React from 'react';
import Header from '../Header';
import ListFieldsSelectedContact from './ListFieldsSelectedContact';
import ModalAddFieldToContact from './ModalAddFieldToContact';
import BtnAddFieldForContact from './BtnAddFieldForContact';
import ModalСonfirmationDeleting from '../ModalСonfirmationDeleting';
import { openModalAddFieldToContact } from './selectors';
import { useSelector } from 'react-redux';
import { openWindowConfirmationDeleting } from '../MainPage/TableContacts/ListContacts/ItemContact/selected';
const InfoSelectedContact = () => {
  const isOpenModalAddFieldToContact = useSelector(openModalAddFieldToContact);
  const isOpenWindowConfirmationDeleting = useSelector(
    openWindowConfirmationDeleting
  );
  return (
    <div>
      <Header />
      <BtnAddFieldForContact />
      {isOpenWindowConfirmationDeleting ? <ModalСonfirmationDeleting /> : null}
      <div>
        <ListFieldsSelectedContact />
        {isOpenModalAddFieldToContact ? <ModalAddFieldToContact /> : null}
      </div>
    </div>
  );
};
export default InfoSelectedContact;
