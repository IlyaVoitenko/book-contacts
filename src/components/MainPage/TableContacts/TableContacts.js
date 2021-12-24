import { Fragment, React } from 'react';
import ListContacts from './ListContacts';
import TableHeader from './TableHeader';
const TableContacts = () => {
  return (
    <Fragment>
      <table>
        <TableHeader />
        <ListContacts />
      </table>
    </Fragment>
  );
};
export default TableContacts;
