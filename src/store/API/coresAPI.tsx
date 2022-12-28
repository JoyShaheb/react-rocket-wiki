import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coresAPI = createApi({
  reducerPath: "coresAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v4",
  }),
  endpoints: (builder) => ({
    getAllCores: builder.query({
      query: () => ({
        url: "/core",
        method: "GET",
      }),
    }),
    getOneCore: builder.query({
      query: (id) => ({
        url: `/core/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllCoresQuery, useGetOneCoreQuery } = coresAPI;
