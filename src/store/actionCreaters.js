import {
  ADD_CONTACT_TO_LIST,
  OPEN_CLOSE_MODAL_WINDOW,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from './actionTypes';

export function updateContact(payload) {
  return { type: UPDATE_CONTACT, payload };
}
export function openCloseModalWindow(payload) {
  return { type: OPEN_CLOSE_MODAL_WINDOW, payload };
}
export function addContactToList(payload) {
  return { type: ADD_CONTACT_TO_LIST, payload };
}
export function deleteContact(payload) {
  return { type: DELETE_CONTACT, payload };
}
