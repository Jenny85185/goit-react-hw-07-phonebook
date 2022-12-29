import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../components/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_,{rejectWithValue}) => {
    try{
      const contacts = await api.fetchContacts();
      return contacts;
    }catch(e) {
      return rejectWithValue(e);
    }
  }
)

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contactToAdd, thunkAPI) => {
    try {      
      const contact = await api.addContact(contactToAdd);      
      return contact;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (idToDelete, thunkAPI) => {
    try {
      const contact = await api.deleteContact(idToDelete);
      return contact;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);