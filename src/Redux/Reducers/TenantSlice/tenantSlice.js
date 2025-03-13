import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTenant = createAsyncThunk("tenant/fetchTenant", async (_, { rejectWithValue, getState }) => {
  try {
    
    const { apiKey } = getState().apiKey;
    
    if (!apiKey) {
      throw new Error("API key is missing");
    }

    const requestBody = {
      name: "zocom_" + new Date().getTime(),
    };

    const response = await fetch("https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/tenants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-zocom": apiKey,
      },
      body: JSON.stringify(requestBody),
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

const tenantSlice = createSlice({
  name: "tenant",
  initialState: { tenant: {}, loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTenant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTenant.fulfilled, (state, action) => {
        state.tenant = action.payload;
        
        state.loading = false;
      })
      .addCase(fetchTenant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default tenantSlice.reducer;
