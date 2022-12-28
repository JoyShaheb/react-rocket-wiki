import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dragonsAPI = createApi({
  reducerPath: "dragonsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v4",
  }),
  endpoints: (builder) => ({
    getAllDragons: builder.query({
      query: () => ({
        url: "/dragons",
        method: "GET",
      }),
    }),
    getOneDragon: builder.query({
      query: (id) => ({
        url: `/dragons/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllDragonsQuery, useGetOneDragonQuery } = dragonsAPI;
