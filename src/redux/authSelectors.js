// export const selectContacts = state => state.contacts.contacts.items;
export const selectAuthIsloading = state => state.auth.isLoading;
export const selectAuthError = state => state.auth.error;
export const selectAuthToken = state => state.auth.token;
export const selectAuthUserData = state => state.auth.user;
export const selectAuthIsAuthenticated = state => state.auth.authenticated;
// export const selectContactsFilter = state => state.contacts.filter;