import {
  ADD_CONTACT_TO_LIST_CONTACTS,
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

//инициализация state
const initialState = {
  isOpenModalAddFieldToContact: false,
  isOpenModalCreateContact: false,
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

// функция изменеия state
function reducer(state = initialState, action) {
  switch (action.type) {
    //открывает модальное окно для редактирования поля контакта
    case OPEN_CLOSE_MODAL_EDIT:
      return { ...state, isOpenModalEdit: action.payload };
    // передаёт имя или id поля  для удаления
    case CONFIRMATION_DELETING:
      return { ...state, confirmationDeleting: action.payload };
    //открывает модальное окно для добавления нового поля контакта
    case OPEN_MODAL_ADD_FIELD_TO_CONTACT:
      return { ...state, isOpenModalAddFieldToContact: action.payload };
    //открывает модальное окно для добавления нового  контакта
    case OPEN_CLOSE_MODAL_WINDOW:
      return { ...state, isOpenModalCreateContact: action.payload };
    //открывает модальное окно для подтверждения удаления
    case OPEN_CLOSE_WINDOW_CONFIRMATION_DELETING:
      return { ...state, isOpenWindowConfirmationDeleting: action.payload };
    //добаляет новый контакт в список контактов
    case ADD_CONTACT_TO_LIST_CONTACTS:
      return {
        ...state,
        listContacts: [...state.listContacts, action.payload],
      };
    // контакт
    case UPDATE_CONTACT:
      return { ...state, contact: { ...state.contact, ...action.payload } };
    //удаление контакта
    case DELETE_CONTACT:
      return {
        ...state,
        listContacts: [
          ...state.listContacts.filter(
            (contact) => action.payload !== contact.id
          ),
        ],
      };
    //удаление выбраного поля контакта
    case DELETE_SELECTED_FIELD:
      return {
        ...state,
        listFieldsSelectedContact: [
          ...state.listFieldsSelectedContact.filter(
            (field) => action.payload !== field.fieldName
          ),
        ],
      };
    // хранит информацию о выбраном контакте
    case SELECTED_CONTACT:
      return {
        ...state,
        selectedContact: { ...state.contact, ...action.payload },
      };
    // обновление списка хранящава поля выбраного контакта
    case UPDATE_LIST_OBJECT_FIELDS:
      return {
        ...state,
        listFieldsSelectedContact: [
          ...state.listFieldsSelectedContact,
          ...action.payload,
        ],
      };
    //   получает данные выбраного поля для редактирования
    case GET_FIELDS_FOR_RDITING:
      return {
        ...state,
        editFieldContact: action.payload,
      };
    //массив хранит предыдущее состояние полей контакта
    case UPDATE_LIST_LAST_CHANGES:
      return { ...state, listLastChanges: [action.payload] };
    //возвращаем предыдущее состояние
    case RETURN_LAST_STATE_LIST_FIELDS:
      return { ...state, listFieldsSelectedContact: [action.payload] };
    default:
      return state;
  }
}
export default reducer;
