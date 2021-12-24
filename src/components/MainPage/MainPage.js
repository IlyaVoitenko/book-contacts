import { Fragment } from 'react';
import BtnAddNewContact from './BtnAddNewContact';
import TableContacts from './TableContacts';
import ModalCreateContact from './ModalCreateContact';
import { useSelector } from 'react-redux';
import ModalСonfirmationDeleting from '../ModalСonfirmationDeleting';
import { isOpenModalUpdateContact } from './selector';
import { openWindowConfirmationDeleting } from '../MainPage/TableContacts/ListContacts/ItemContact/selected';
const MainPage = () => {
  const isOpenWindowConfirmationDeleting = useSelector(
    openWindowConfirmationDeleting
  );
  const isOpen = useSelector(isOpenModalUpdateContact);
  return (
    <Fragment>
      <BtnAddNewContact />
      <TableContacts />
      {isOpen ? <ModalCreateContact /> : null}
      {isOpenWindowConfirmationDeleting ? <ModalСonfirmationDeleting /> : null}
    </Fragment>
  );
};
export default MainPage;
