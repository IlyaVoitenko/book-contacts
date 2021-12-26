import React from 'react';
import Header from '../Header';
import ListFieldsSelectedContact from './ListFieldsSelectedContact';
import ModalAddFieldToContact from './ModalAddFieldToContact';
import BtnAddFieldForContact from './BtnAddFieldForContact';
import ModalСonfirmationDeleting from '../ModalСonfirmationDeleting';
import { openModalAddFieldToContact } from './selectors';
import { useSelector } from 'react-redux';
import ModalEdit from './ModalEdit';
import { getOpenCloseModalEdit } from './ModalEdit/selectors';
import { openWindowConfirmationDeleting } from '../ModalСonfirmationDeleting/selectors';
const InfoSelectedContact = () => {
  const isOpenModalAddFieldToContact = useSelector(openModalAddFieldToContact);
  const isOpenWindowConfirmationDeleting = useSelector(
    openWindowConfirmationDeleting
  );
  const isOpenEditModal = useSelector(getOpenCloseModalEdit);
  return (
    <div>
      <Header />
      <BtnAddFieldForContact />
      {isOpenEditModal ? <ModalEdit /> : null}
      {isOpenWindowConfirmationDeleting ? <ModalСonfirmationDeleting /> : null}
      <div>
        <ListFieldsSelectedContact />
        {isOpenModalAddFieldToContact ? <ModalAddFieldToContact /> : null}
      </div>
    </div>
  );
};
export default InfoSelectedContact;
