import { Fragment } from 'react';
import BtnAddNewContact from './BtnAddNewContact';
import TableContacts from './TableContacts';
import ModalCreateContact from '../ModalCreateContact';
import { useSelector } from 'react-redux';
import { isOpenModal } from './selector';
const MainPage = () => {
  const isOpen = useSelector(isOpenModal);
  return (
    <Fragment>
      <BtnAddNewContact />
      <TableContacts />
      {isOpen ? <ModalCreateContact /> : null}
    </Fragment>
  );
};
export default MainPage;
