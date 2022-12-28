import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const histroyAPI = createApi({
  reducerPath: "histroyAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v4",
  }),
  endpoints: (builder) => ({
    getAllHistories: builder.query({
      query: () => ({
        url: "/history",
        method: "GET",
      }),
    }),
    getOneHistory: builder.query({
      query: (id) => ({
        url: `/history/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllHistoriesQuery, useGetOneHistoryQuery } = histroyAPI;
