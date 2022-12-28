import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  rocketAPI,
  useGetAllRocketsQuery,
  useGetOneRocketQuery,
} from "./API/rocketAPI";
import { uiSettingsReducer, themeSwitch } from "./slices/uiSettings";
import {
  shipsAPI,
  useGetAllShipsQuery,
  useGetOneShipQuery,
} from "./API/shipsAPI";
import {
  capsulesAPI,
  useGetAllCapsulesQuery,
  useGetOneCapsuleQuery,
} from "./API/capsulesAPI";

export const store = configureStore({
  reducer: {
    uiSettings: uiSettingsReducer,
    [rocketAPI.reducerPath]: rocketAPI.reducer,
    [shipsAPI.reducerPath]: shipsAPI.reducer,
    [capsulesAPI.reducerPath]: capsulesAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      rocketAPI.middleware,
      shipsAPI.middleware,
      capsulesAPI.middleware
    );
  },
});

setupListeners(store.dispatch);

export {
  useGetAllRocketsQuery,
  useGetOneRocketQuery,
  themeSwitch,
  useGetAllShipsQuery,
  useGetOneShipQuery,
  useGetAllCapsulesQuery,
  useGetOneCapsuleQuery,
};
