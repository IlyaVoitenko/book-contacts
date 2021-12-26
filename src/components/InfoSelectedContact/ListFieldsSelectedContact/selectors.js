export function getListObjectFields(state) {
  return state.listFieldsSelectedContact.flat();
}
export function getSelectedContact(state) {
  return state.contact;
}
