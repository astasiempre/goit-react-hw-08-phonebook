export const selectContacts = state => state.phonebook.contacts;
export const selectContactsIsloading = state => state.phonebook.isLoading;
export const selectContactsError = state => state.phonebook.error;
export const selectContactsFilterTerm = state => state.phonebook.filterTerm;