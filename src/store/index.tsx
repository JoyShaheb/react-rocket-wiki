import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { uiSettingsReducer, themeSwitch } from "./slices/uiSettings";
import {
  rocketAPI,
  useGetAllRocketsQuery,
  useGetOneRocketQuery,
} from "./API/rocketAPI";
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
import {
  histroyAPI,
  useGetAllHistoriesQuery,
  useGetOneHistoryQuery,
} from "./API/historyAPI";
import {
  coresAPI,
  useGetAllCoresQuery,
  useGetOneCoreQuery,
} from "./API/coresAPI";
import {
  dragonsAPI,
  useGetAllDragonsQuery,
  useGetOneDragonQuery,
} from "./API/dragonsAPI";

export const store = configureStore({
  reducer: {
    uiSettings: uiSettingsReducer,
    [rocketAPI.reducerPath]: rocketAPI.reducer,
    [shipsAPI.reducerPath]: shipsAPI.reducer,
    [capsulesAPI.reducerPath]: capsulesAPI.reducer,
    [histroyAPI.reducerPath]: histroyAPI.reducer,
    [coresAPI.reducerPath]: coresAPI.reducer,
    [dragonsAPI.reducerPath]: dragonsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      rocketAPI.middleware,
      shipsAPI.middleware,
      capsulesAPI.middleware,
      histroyAPI.middleware,
      coresAPI.middleware,
      dragonsAPI.middleware
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
  useGetAllHistoriesQuery,
  useGetOneHistoryQuery,
  useGetAllCoresQuery,
  useGetOneCoreQuery,
  useGetAllDragonsQuery,
  useGetOneDragonQuery,
};
