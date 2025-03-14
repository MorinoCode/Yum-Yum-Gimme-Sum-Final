import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchApiKey = createAsyncThunk('apiKey/fetchApiKey', async (_, { rejectWithValue }) => {
  try {
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/keys", request);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {

    return rejectWithValue(error.message);
  }
});

const apiKeySlice = createSlice({
  name: "apiKey",
  initialState: {
    apiKey: "",
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiKey.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchApiKey.fulfilled, (state, action) => {
        state.apiKey = action.payload.key;
        state.loading = false;
      })
      .addCase(fetchApiKey.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ;
      });
  },
});

export default apiKeySlice.reducer;

