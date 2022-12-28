import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const launchAPI = createApi({
  reducerPath: "launchAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v4",
  }),
  endpoints: (builder) => ({
    getAllLaunches: builder.query({
      query: () => ({
        url: "/launches",
        method: "GET",
      }),
    }),
    getOneLaunch: builder.query({
      query: (id) => ({
        url: `/launches/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllLaunchesQuery, useGetOneLaunchQuery } = launchAPI;
