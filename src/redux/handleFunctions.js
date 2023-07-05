import { Notify } from 'notiflix';

export const fetchHandlePending = state => {
  state.isLoading = true;
};

export const fetchHandleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

export const fetchHandleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactHandleAddFulfilled = (state, { payload }) => {
  state.items.push({
    id: payload.id,
    name: payload.name,
    number: payload.number,
  });
};
export const contactHandleAddRejected = (state, { payload }) => {
  state.error = payload;
};

export const contactHandleDelete = (state, { payload }) => {
  const filterValueId = state.items.findIndex(
    contact => contact.id === payload.id
  );
  state.items.splice(filterValueId, 1);
};

export const filterHandleUpdate = (state, { payload }) => {
  state.filter = payload;
};

export const userHandleSignUpFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.isLoggedIn = true;
  Notify.success('You have been registered successful');
};

export const userHandleSignUpRejected = () => {
  Notify.failure('Oops, this email is already registered, try Log In!');
};

export const userHandleLogInFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.isLoggedIn = true;
  state.error = null;
  Notify.success('WELCOME!');
};

export const userHandleLogInRejected = () => {
  Notify.failure('Oops, your email or password is incorrect, try again!');
};

export const userHandleGetUserFulfilled = (state, { payload }) => {
  state.currentUser = payload.data;
  state.isLoading = false;
};

export const userLogOutFulfilled = state => {
  state.isLoggedIn = false;
  state.token = null;
  state.currentUser = null;
};
