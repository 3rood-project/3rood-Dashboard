import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./reducers/UsersReducers";
import statisticsReducer from "./reducers/StatisticReducers";
import ShopsRequestReducers from "reducers/ShopsRequestReducers";
import allShopsReducer from "reducers/AllShopsReducers";
import ProductsReducers from "reducers/ProductsReducers";
import allMessagesReducers from "reducers/ContactReducers";
import OrderReducers from "reducers/OrderReducers";

export const store = configureStore({
  reducer: {
    statistics: statisticsReducer,
    users: UsersReducer,
    shops: ShopsRequestReducers,
    allShops: allShopsReducer,
    products: ProductsReducers,
    allMessages: allMessagesReducers,
    allOrders: OrderReducers,
  },
});
