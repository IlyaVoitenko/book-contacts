import {
  ADD_CONTACT_TO_LIST,
  OPEN_CLOSE_MODAL_WINDOW,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from './actionTypes';
const initialState = {
  isOpenModal: false,
  listContacts: [],
  contact: {
    id: '',
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
    case DELETE_CONTACT:
      return {
        ...state,
        listContacts: [
          ...state.listContacts.filter(
            (contact) => action.payload !== contact.id
          ),
        ],
      };
    default:
      return state;
  }
}
export default reducer;
