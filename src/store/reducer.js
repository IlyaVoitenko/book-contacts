import {
  ADD_CONTACT_TO_LIST,
  OPEN_CLOSE_MODAL_WINDOW,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECTED_CONTACT,
  OPEN_CLOSE_WINDOW_CONFIRMATION_DELETING,
  UPDATE_LIST_OBJECT_FIELDS,
  OPEN_MODAL_ADD_FIELD_TO_CONTACT,
  DELETE_SELECTED_FIELD,
  CONFIRMATION_DELETING,
} from './actionTypes';
const initialState = {
  confirmationDeleting: {},
  isOpenModalAddFieldToContact: false,
  isOpenModalUpdateContact: false,
  isOpenWindowConfirmationDeleting: false,
  selectedContact: {},
  listFieldsSelectedContact: [],
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
    case CONFIRMATION_DELETING:
      return { ...state, confirmationDeleting: action.payload };
    case OPEN_MODAL_ADD_FIELD_TO_CONTACT:
      return { ...state, isOpenModalAddFieldToContact: action.payload };
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
    case DELETE_SELECTED_FIELD:
      return {
        ...state,
        listFieldsSelectedContact: [
          ...state.listFieldsSelectedContact.filter(
            (field) => action.payload !== field.fieldName
          ),
        ],
      };
    case SELECTED_CONTACT:
      return {
        ...state,
        selectedContact: { ...state.contact, ...action.payload },
      };
    case UPDATE_LIST_OBJECT_FIELDS:
      return {
        ...state,
        listFieldsSelectedContact: [
          ...state.listFieldsSelectedContact,
          ...action.payload,
        ],
      };
    default:
      return state;
  }
}
export default reducer;
