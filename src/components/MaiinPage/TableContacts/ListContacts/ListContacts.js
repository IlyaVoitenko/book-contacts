import { getListContacts } from './selectors';
import { useSelector } from 'react-redux';
import ItemContact from './ItemContact';
const ListContacts = () => {
  const listContacts = useSelector(getListContacts);
  console.log(listContacts);
  return (
    <tbody>
      {listContacts.map((contact, index) => {
        return <ItemContact key={index} id={index} contact={contact} />;
      })}
    </tbody>
  );
};
export default ListContacts;
