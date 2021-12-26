import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListLastChanges } from './selectors';
import { returnChangesListFields } from '../../../store/actionCreaters';

const BtnСancelingLastChanges = () => {
  const dispatch = useDispatch();
  const listLastChanges = useSelector(getListLastChanges);

  return (
    <button
      onClick={() => {
        // обновление массива хранящего поля контакта
        dispatch(returnChangesListFields([...listLastChanges.flat()]));
      }}
    >
      Step back
    </button>
  );
};
export default BtnСancelingLastChanges;
