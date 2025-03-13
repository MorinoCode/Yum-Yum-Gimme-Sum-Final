import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    orders : [],
    loading : false,
    error : null
}
const ordersHistory = createSlice({
    name : 'ordersHistory',
    initialState,
    reducers : {
        
    }
})