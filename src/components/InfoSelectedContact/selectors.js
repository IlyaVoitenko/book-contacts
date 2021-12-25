export function getListObjectFields(state) {
  return state.listFieldsSelectedContact.flat();
}
export function openModalAddFieldToContact(state) {
  return state.isOpenModalAddFieldToContact;
}
