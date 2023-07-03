import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './contactsInitialState';
import { addContact, deleteContact, fetchContacts } from './contactOperations';
import { onUpdateFilterValue } from 'components/Filter/Filter';
import {
  fetchHandlePending,
  fetchHandleFulfilled,
  fetchHandleRejected,
  contactHandleDelete,
  filterHandleUpdate,
  contactHandleAddFulfilled,
  contactHandleAddRejected,
} from './handleFunctions';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, fetchHandlePending)
      .addCase(fetchContacts.fulfilled, fetchHandleFulfilled)
      .addCase(fetchContacts.rejected, fetchHandleRejected)
      .addCase(addContact.fulfilled, contactHandleAddFulfilled)
      .addCase(addContact.rejected, contactHandleAddRejected)
      .addCase(deleteContact.fulfilled, contactHandleDelete)
      .addCase(onUpdateFilterValue, filterHandleUpdate);
  },
});

export const contactsReducer = contactsSlice.reducer;
