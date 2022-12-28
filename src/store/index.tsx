import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  rocketAPI,
  useGetAllRocketsQuery,
  useGetOneRocketQuery,
} from "./API/rocketAPI";
import { uiSettingsReducer, themeSwitch } from "./slices/uiSettings";

export const store = configureStore({
  reducer: {
    uiSettings: uiSettingsReducer,
    [rocketAPI.reducerPath]: rocketAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(rocketAPI.middleware);
  },
});

setupListeners(store.dispatch);

export { useGetAllRocketsQuery, useGetOneRocketQuery, themeSwitch };
