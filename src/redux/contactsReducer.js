import {
  requestAddContact,
  requestContacts,
  requestDeleteContact,
} from 'services/phoneBookApi';

const { createSlice, createAsyncThunk, isAnyOf } = require('@reduxjs/toolkit');

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (__, thunkAPI) => {
    try {
      const contactsData = await requestContacts();
      console.log(contactsData);
      return contactsData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const contact = await requestAddContact(newContact);
      console.log(contact);
      return contact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const deletedContact = await requestDeleteContact(contactId);
      console.log(deletedContact);
      return deletedContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const INITIAL_STATE = {
  contacts: null,
    isLoading: false,
    error: null,
    filterTerm: '',
  }


const contactsSlice = createSlice({
  name: 'contacts',

  initialState: INITIAL_STATE,

  reducers: {
    setFilterTerm: (state, action) => {
      state.filterTerm = action.payload;
    },
  },

  extraReducers: builder =>
    builder
    //   .addCase(fetchContacts.pending, state => {
    //     state.contacts.isLoading = true;
    //     state.contacts.error = null;
    //   })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
    //   .addCase(fetchContacts.rejected, (state, action) => {
    //     state.contacts.isLoading = false;
    //     state.contacts.error = action.payload;
    //   })
    //   .addCase(addContact.pending, state => {
    //     state.contacts.isLoading = true;
    //     state.contacts.error = null;
    //   })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        if (Array.isArray(state.contacts)) {
          
          state.contacts.unshift(action.payload);
        } else {
          state.contacts = [action.payload];
        }
      })
    //   .addCase(addContact.rejected, (state, action) => {
    //     state.contacts.isLoading = false;
    //     state.contacts.error = action.payload;
    //   })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id,
      );
    })
    //   .addCase(deleteContact.pending, state => {
    //     state.contacts.isLoading = true;
    //     state.contacts.error = null;
    //   })
    //   .addCase(deleteContact.rejected, (state, action) => {
    //     state.contacts.isLoading = false;
    //     state.contacts.error = action.payload;
    //   })
  .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending,
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected,
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
  
});

export const { setFilterTerm } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;