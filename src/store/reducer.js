import {
  ADD_CONTACT_TO_LIST,
  OPEN_CLOSE_MODAL_WINDOW,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECTED_CONTACT,
  OPEN_CLOSE_WINDOW_CONFIRMATION_DELETING,
} from './actionTypes';
const initialState = {
  isOpenModalUpdateContact: false,
  isOpenWindowConfirmationDeleting: false,
  selectedContact: {},
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
      return { ...state, isOpenModalUpdateContact: action.payload };
    case OPEN_CLOSE_WINDOW_CONFIRMATION_DELETING:
      return { ...state, isOpenWindowConfirmationDeleting: action.payload };
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

    case SELECTED_CONTACT:
      return {
        ...state,
        selectedContact: { ...state.contact, ...action.payload },
      };

    default:
      return state;
  }
}
export default reducer;
