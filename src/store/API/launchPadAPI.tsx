import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const launchPadAPI = createApi({
  reducerPath: "launchPadAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v4",
  }),
  endpoints: (builder) => ({
    getAllLaunchPads: builder.query({
      query: () => ({
        url: "/launchpads",
        method: "GET",
      }),
    }),
    getOneLaunchPads: builder.query({
      query: (id) => ({
        url: `/launchpads/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllLaunchPadsQuery, useGetOneLaunchPadsQuery } = launchPadAPI;