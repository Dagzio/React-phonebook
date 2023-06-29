export const selectContacts = state => state.contacts.contacts.items;

export const selectFilterValue = state => state.contacts.filter;

export const selectIsLoading = state => state.contacts.contacts.isLoading;

export const selectError = state => state.contacts.contacts.error;

export const selectIsLoggedIn = state => state.user.isLoggedIn;

export const selectUserEmail = state => state.user.currentUser?.email;
