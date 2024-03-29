export const selectContacts = state => state.contacts.items;

export const selectFilterValue = state => state.contacts.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectIsLoggedIn = state => state.user.isLoggedIn;

export const selectToken = state => state.user.token;

export const selectCurrentUser = state => state.user.currentUser;
