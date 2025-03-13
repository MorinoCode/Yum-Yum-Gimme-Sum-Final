import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartQuantity: 0,
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartQuantityHandler: (state) => {
            state.cartQuantity += 1;
        },
        addedItemsToCard: (state, action) => {
            const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

            if (existingItemIndex !== -1) {
                state.cartItems[existingItemIndex] = {
                    ...state.cartItems[existingItemIndex],
                    quantity: state.cartItems[existingItemIndex].quantity + 1,
                    totalPrice: (state.cartItems[existingItemIndex].quantity + 1) * state.cartItems[existingItemIndex].price
                };
            } else {
                state.cartItems.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    quantity: 1,
                    totalPrice: action.payload.price
                });
            }
        },
        increaseItemQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
                item.totalPrice = item.quantity * item.price;
                state.cartQuantity += 1;
            }
        },
        decreaseItemQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload);
            if (itemIndex !== -1) {
                if (state.cartItems[itemIndex].quantity > 1) {
                    state.cartItems[itemIndex].quantity -= 1;
                    state.cartItems[itemIndex].totalPrice = state.cartItems[itemIndex].quantity * state.cartItems[itemIndex].price;
                    state.cartQuantity -= 1;
                } else {
                    state.cartItems.splice(itemIndex, 1); 
                    state.cartQuantity -= 1;
                }
            }
        },
        newOrderHandler : (state) => {
            state.cartQuantity= 0,
            state.cartItems= []
        }
    }
});

export const { cartQuantityHandler, addedItemsToCard, increaseItemQuantity, decreaseItemQuantity ,newOrderHandler} = cartSlice.actions;
export default cartSlice.reducer;
