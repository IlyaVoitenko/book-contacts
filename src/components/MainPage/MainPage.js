import { Fragment } from 'react';
import BtnAddNewContact from './BtnAddNewContact';
import TableContacts from './TableContacts';
import ModalCreateContact from './ModalCreateContact';
import ModalСonfirmationDeleting from '../ModalСonfirmationDeleting';
import { useSelector } from 'react-redux';
import { openWindowConfirmationDeleting } from '../ModalСonfirmationDeleting/selectors';
import { isOpenModalCreateContact } from './selector';
const MainPage = () => {
  const isOpenModalCreate = useSelector(isOpenModalCreateContact);
  const isOpenWindowConfirmationDeleting = useSelector(
    openWindowConfirmationDeleting
  );
  return (
    <Fragment>
      <BtnAddNewContact />
      <TableContacts />
      {isOpenWindowConfirmationDeleting ? <ModalСonfirmationDeleting /> : null}
      {isOpenModalCreate ? <ModalCreateContact /> : null}
    </Fragment>
  );
};
export default MainPage;
