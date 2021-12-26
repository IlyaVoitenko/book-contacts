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

export function updateListLastChanges(payload) {
  return { type: UPDATE_LIST_LAST_CHANGES, payload };
}
export function confirmationDeleting(payload) {
  return { type: CONFIRMATION_DELETING, payload };
}
export function deleteField(payload) {
  return { type: DELETE_SELECTED_FIELD, payload };
}
export function updateContact(payload) {
  return { type: UPDATE_CONTACT, payload };
}
export function addContactToList(payload) {
  return { type: ADD_CONTACT_TO_LIST, payload };
}
export function deleteContact(payload) {
  return { type: DELETE_CONTACT, payload };
}
export function updateSelectedContact(payload) {
  return { type: SELECTED_CONTACT, payload };
}
export function updateListObjectFields(payload) {
  return { type: UPDATE_LIST_OBJECT_FIELDS, payload };
}
export function getFieldsForEditing(payload) {
  return { type: GET_FIELDS_FOR_RDITING, payload };
}
export function returnChangesListFields(payload) {
  return { type: RETURN_LAST_STATE_LIST_FIELDS, payload };
}
//modal windows
export function openCloseModalWindow(payload) {
  return { type: OPEN_CLOSE_MODAL_WINDOW, payload };
}
export function openCloseWindowConfirmationDeleting(payload) {
  return { type: OPEN_CLOSE_WINDOW_CONFIRMATION_DELETING, payload };
}
export function openCloseModalAddFiedToContact(payload) {
  return { type: OPEN_MODAL_ADD_FIELD_TO_CONTACT, payload };
}
export function openCloseModalEdit(payload) {
  return { type: OPEN_CLOSE_MODAL_EDIT, payload };
}
