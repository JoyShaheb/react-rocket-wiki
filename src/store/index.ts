import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonApi } from "./API/sampleAPI";
import { CapsulesAPI, useGetAllCapsulesQuery } from "./API/capsulesAPI";
import { sysmtemSlice, resetSystem, themeSwitch } from "./Slices/systemSlice";

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [CapsulesAPI.reducerPath]: CapsulesAPI.reducer,
    system: sysmtemSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      pokemonApi.middleware,
      CapsulesAPI.middleware
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
};
