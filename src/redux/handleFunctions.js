import { Notify } from 'notiflix';


export const fetchHandlePending = state => {
  state.contacts.isLoading = true;
};

export const fetchHandleFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items = payload;
};

export const fetchHandleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

export const contactHandleAdd = (state, { payload }) => {
  state.contacts.items.push({
    id: payload.id,
    name: payload.name,
    phone: payload.phone,
  });
};

export const contactHandleDelete = (state, { payload }) => {
  const filterValueId = state.contacts.items.findIndex(
    contact => contact.id === payload.id
  );
  state.contacts.items.splice(filterValueId, 1);
};

export const filterHandleUpdate = (state, { payload }) => {
  state.filter = payload;
};

export const userHandleSignUpFulfilled = () => {
  Notify.success('You have been registered and can now Log in to your account');
};

export const userHandleSignUpRejected = () => {
  Notify.failure('Oops, this email is already registered, try Log In!');
};

export const userHandleLogInFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.isLoggedIn = true;
  Notify.success('WELCOME!');
};

export const userHandleLogInRejected = () => {
  Notify.failure('Oops, your email or password is incorrect, try again!');
};

export const userHandleGetUserFulfilled = (state, { payload }) => {
  state.currentUser = { ...payload.data };
  state.isLoading = false;
};

export const userLogOutFulfilled = state => {
  state.isLoggedIn = false;
  state.token='';
  state.currentUser=null;
};

// СДЕЛАТЬ ЗАПРОС НА CURRENT USER ПОСЛЕ ЛОГИНА ( ЭТО ДЛЯ ВЫВОДА ИМЕНИ HELLO, LOGOUT)
