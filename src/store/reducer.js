import {
  ADD_CONTACT_TO_LIST,
  OPEN_CLOSE_MODAL_WINDOW,
  UPDATE_CONTACT,
} from './actionTypes';
const initialState = {
  isOpenModal: false,
  listContacts: [
    {
      name: 'alex',
      surname: 'Ivanov',
      email: 'sada@gma.com',
      phoneNumber: '+4804432242',
      address: 'sdasddd 12 ',
    },
  ],
  contact: {
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    address: '',
  },
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_CLOSE_MODAL_WINDOW:
      return { ...state, isOpenModal: action.payload };
    case ADD_CONTACT_TO_LIST:
      return {
        ...state,
        listContacts: [...state.listContacts, action.payload],
      };
    case UPDATE_CONTACT:
      return { ...state, contact: { ...state.contact, ...action.payload } };
    default:
      return state;
  }
}
export default reducer;
