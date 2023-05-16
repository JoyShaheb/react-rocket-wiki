import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { CoresAPI, useGetAllCoresQuery } from "./API/coresAPI";
import { CapsulesAPI, useGetAllCapsulesQuery } from "./API/capsulesAPI";
import { sysmtemSlice, resetSystem, themeSwitch } from "./Slices/systemSlice";
import { HistoryAPI, useGetAllHistoriesQuery } from "./API/historyAPI";

export const store = configureStore({
  reducer: {
    [CoresAPI.reducerPath]: CoresAPI.reducer,
    [CapsulesAPI.reducerPath]: CapsulesAPI.reducer,
    [HistoryAPI.reducerPath]: HistoryAPI.reducer,
    system: sysmtemSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      CoresAPI.middleware,
      CapsulesAPI.middleware,
      HistoryAPI.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {
  // system settings
  resetSystem,
  themeSwitch,

  // Capsules API
  useGetAllCapsulesQuery,

  // Cores API
  useGetAllCoresQuery,

  // Histories API
  useGetAllHistoriesQuery,
};

// Adding the api middleware enables caching, invalidation, polling,
// and other useful features of `rtk-query`.
