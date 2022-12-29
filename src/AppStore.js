import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./reducers/UsersReducers";
import statisticsReducer from "./reducers/StatisticReducers";
import ShopsRequestReducers from "reducers/ShopsRequestReducers";

export const store = configureStore({
  reducer: {
    statistics: statisticsReducer,
    users: UsersReducer,
    shops: ShopsRequestReducers,
  },
});
