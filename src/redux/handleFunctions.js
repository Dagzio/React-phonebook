export const fetchHandlePending = state => {
  state.contactsReducer.contacts.isLoading = true;
};

export const fetchHandleFulfilled = (state, { payload }) => {
  state.contactsReducer.contacts.isLoading = false;
  state.contactsReducer.contacts.error = null;
  state.contactsReducer.contacts.items = payload;
};

export const fetchHandleRejected = (state, { payload }) => {
  state.contactsReducer.contacts.isLoading = false;
  state.contactsReducer.contacts.error = payload;
};

export const contactHandleAdd = (state, { payload }) => {
  state.contactsReducer.contacts.items.push({
    id: payload.id,
    name: payload.name,
    phone: payload.phone,
  });
};

export const contactHandleDelete = (state, { payload }) => {
  const filterValueId = state.contacts.items.findIndex(
    contact => contact.id === payload.id
  );
  state.contactsReducer.contacts.items.splice(filterValueId, 1);
};

export const filterHandleUpdate = (state, { payload }) => {
  state.contactsReducer.filter = payload;
};

export const userHandleSignUp = (state, { payload }) => {
  state.userReducer.token = payload;
  console.log(state.userReducer.token)
};
