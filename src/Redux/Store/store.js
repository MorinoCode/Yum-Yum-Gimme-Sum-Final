import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../Reducers/MenuSlice/menuSlice";
import cartReducer from "../Reducers/CartSlice/cartSlice";
import apiKeyReducer from "../Reducers/ApiKeySlice/apiKeySlice";
import tenantReducer from "../Reducers/TenantSlice/tenantSlice";
import themeReducer from "../Reducers/ThemeSlice/themeSlice";
import orderReducer from '../Reducers/OrderSlice/orderSlice'

const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
    apiKey: apiKeyReducer,
    tenant: tenantReducer,
    theme: themeReducer,
    order : orderReducer
  },
});

export default store;
