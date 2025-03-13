import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMenu = createAsyncThunk("menu/fetchMenu", async (_, { rejectWithValue, getState }) => {
  try {

    const { apiKey } = getState().apiKey;

    const response = await fetch("https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu", {
      method: "GET",
      headers: { "x-zocom": apiKey },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  menuList: [],
  loading: false,
  error: null,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.menuList = action.payload.items;
        state.loading = false;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default menuSlice.reducer;

