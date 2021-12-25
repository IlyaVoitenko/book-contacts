import { useSelector } from 'react-redux';
import { getListObjectFields } from '../selectors';
import ItemFieldsSelectedContact from '../ItemFieldsSelectedContact';
const ListFieldsSelectedContact = () => {
  const listFieldsselectedContact = useSelector(getListObjectFields);
  return listFieldsselectedContact[0].map((fieldContact, index) => {
    return (
      <ItemFieldsSelectedContact key={index} fieldContact={fieldContact} />
    );
  });
};
export default ListFieldsSelectedContact;
