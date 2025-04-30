import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "./features/userSlice";

import { Api } from "./api";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [Api.reducerPath]: Api.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});

setupListeners(store.dispatch);