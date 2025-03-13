import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const sendOrderHandler = createAsyncThunk(
    "order/sendOrderHandler",
    async (cartItemsId, { rejectWithValue, getState }) => {
      try {
        const { tenant } = getState().tenant; 
        const { apiKey } = getState().apiKey; 
  
        if (!tenant || !tenant.id) {
          throw new Error("Tenant ID saknas.");
        }
        if (!apiKey) {
          throw new Error("API-nyckel saknas.");
        }
  
        const response = await fetch(
          `https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/${tenant.id}/orders`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-zocom": apiKey,
            },
            body: JSON.stringify({ items: cartItemsId }), 
          }
        );
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  

const initialState = {
  order: "",
  orders: [],
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(sendOrderHandler.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(sendOrderHandler.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
        state.orders= [...state.orders , action.payload]
        
      })
      .addCase(sendOrderHandler.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
