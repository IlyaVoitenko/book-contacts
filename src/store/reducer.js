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
  OPEN_CLOSE_MODAL_EDIT,
  GET_FIELDS_FOR_RDITING,
  UPDATE_LIST_LAST_CHANGES,
  RETURN_LAST_STATE_LIST_FIELDS,
} from './actionTypes';
const initialState = {
  isOpenModalAddFieldToContact: false,
  isOpenModalUpdateContact: false,
  isOpenWindowConfirmationDeleting: false,
  isOpenModalEdit: false,
  editFieldContact: {},
  confirmationDeleting: {},
  contact: {
    id: '',
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    address: '',
  },
  selectedContact: {},
  listFieldsSelectedContact: [],
  listContacts: [],
  listLastChanges: [],
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_CLOSE_MODAL_EDIT:
      return { ...state, isOpenModalEdit: action.payload };
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
    case GET_FIELDS_FOR_RDITING:
      return {
        ...state,
        editFieldContact: action.payload,
      };
    case UPDATE_LIST_LAST_CHANGES:
      return { ...state, listLastChanges: [action.payload] };
    case RETURN_LAST_STATE_LIST_FIELDS:
      return { ...state, listFieldsSelectedContact: [action.payload] };
    default:
      return state;
  }
}
export default reducer;
