import {
  ADD_CONTACT_TO_LIST,
  OPEN_CLOSE_MODAL_WINDOW,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECTED_CONTACT,
  OPEN_CLOSE_WINDOW_CONFIRMATION_DELETING,
  UPDATE_LIST_OBJECT_FIELDS,
  OPEN_MODAL_ADD_FIELD_TO_CONTACT,
} from './actionTypes';

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
export function openCloseModalWindow(payload) {
  return { type: OPEN_CLOSE_MODAL_WINDOW, payload };
}
export function openCloseWindowConfirmationDeleting(payload) {
  return { type: OPEN_CLOSE_WINDOW_CONFIRMATION_DELETING, payload };
}
export function openCloseModalAddFiedToContact(payload) {
  return { type: OPEN_MODAL_ADD_FIELD_TO_CONTACT, payload };
}
