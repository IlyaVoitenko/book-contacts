import { useDispatch, useSelector } from 'react-redux';
import { getListObjectFields } from '../selectors';
import ItemFieldsSelectedContact from '../ItemFieldsSelectedContact';
import { getSelectedContact } from '../../MainPage/ModalCreateContact/selectors';
import { updateListObjectFields } from '../../../store/actionCreaters';
import { useEffect } from 'react';

const ListFieldsSelectedContact = () => {
  const dispatch = useDispatch();
  const listFieldsselectedContact = useSelector(getListObjectFields);
  const selectedContact = useSelector(getSelectedContact);
  useEffect(() => {
    for (const [fieldName, fieldValue] of Object.entries(selectedContact)) {
      dispatch(updateListObjectFields([{ fieldName, fieldValue }]));
    }
  }, [dispatch]);

  return listFieldsselectedContact.map((fieldContact, index) => {
    return (
      <ItemFieldsSelectedContact key={index} fieldContact={fieldContact} />
    );
  });
};
export default ListFieldsSelectedContact;
