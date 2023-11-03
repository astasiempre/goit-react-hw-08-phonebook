import { requestLogin, requestRegister } from 'services/phoneBookApi';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const responses = await requestLogin(formData);
      console.log(responses);
      return responses;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const responses = await requestRegister(formData);
      console.log(responses);
      return responses;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  
    isLoading: false,
    error: null,
};

const authSlice = createSlice({

  name: 'auth',

  initialState: INITIAL_STATE,

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: builder =>
    builder
    //   .addCase(fetchContacts.pending, state => {
    //     state.contacts.isLoading = true;
    //     state.contacts.error = null;
    //   })
    //   .addCase(fetchContacts.fulfilled, (state, action) => {
    //     state.contacts.isLoading = false;
    //     state.contacts.items = action.payload;
    //   })
    //   .addCase(fetchContacts.rejected, (state, action) => {
    //     state.contacts.isLoading = false;
    //     state.contacts.error = action.payload;
    //   })
      
      
      
      
});

