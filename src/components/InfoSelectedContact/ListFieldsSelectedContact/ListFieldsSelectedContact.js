import { useDispatch, useSelector } from 'react-redux';
import { getListObjectFields, getSelectedContact } from './selectors';
import ItemFieldsSelectedContact from '../ItemFieldsSelectedContact';
import { updateListObjectFields } from '../../../store/actionCreaters';
import { useEffect } from 'react';

const ListFieldsSelectedContact = () => {
  const dispatch = useDispatch();
  const listFieldsselectedContact = useSelector(getListObjectFields);
  const selectedContact = useSelector(getSelectedContact);

  // добавляем поля  из обьекта в массив
  useEffect(() => {
    for (const [fieldName, fieldValue] of Object.entries(selectedContact)) {
      dispatch(updateListObjectFields([{ fieldName, fieldValue }]));
    }
  }, [dispatch, selectedContact]);

  //отрисовка массива в котором хранятся поля выбраного контакта
  return listFieldsselectedContact.map((fieldContact, index) => {
    return (
      <ItemFieldsSelectedContact key={index} fieldContact={fieldContact} />
    );
  });
};
export default ListFieldsSelectedContact;
