import { Fragment } from 'react';
import BtnAddNewContact from './BtnAddNewContact';
import TableContacts from './TableContacts';
import ModalCreateContact from './ModalCreateContact';
import ModalСonfirmationDeleting from '../ModalСonfirmationDeleting';
import { useSelector } from 'react-redux';
import { isOpenModalUpdateContact } from './selector';
const MainPage = () => {
  const isOpen = useSelector(isOpenModalUpdateContact);
  const isOpenCloseWindowConfirmationDeleting = useSelector(
    isOpenModalUpdateContact
  );
  return (
    <Fragment>
      <BtnAddNewContact />
      <TableContacts />
      {isOpenCloseWindowConfirmationDeleting ? (
        <ModalСonfirmationDeleting />
      ) : null}
      {isOpen ? <ModalCreateContact /> : null}
    </Fragment>
  );
};
export default MainPage;
