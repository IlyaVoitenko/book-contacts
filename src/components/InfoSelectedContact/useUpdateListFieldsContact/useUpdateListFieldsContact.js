import { useSelector, useDispatch } from 'react-redux';
import { updateListObjectFields } from '../../../store/actionCreaters';
import { getSelectedContact } from '../../MainPage/ModalCreateContact/selectors';

function useUpdateListFieldsContact() {
  const dispatch = useDispatch();
  const selectedContact = useSelector(getSelectedContact);
  let objectFieldsSelectedContact = [];
  for (var value in selectedContact) {
    if (selectedContact.hasOwnProperty(value)) {
      objectFieldsSelectedContact.push({
        fieldName: value,
        fieldValue: selectedContact[value],
      });
    }
  }
  return dispatch(updateListObjectFields([...objectFieldsSelectedContact]));
}
export default useUpdateListFieldsContact;
