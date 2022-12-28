import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const landpadAPI = createApi({
  reducerPath: "landpadAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v4",
  }),
  endpoints: (builder) => ({
    getAllLandPads: builder.query({
      query: () => ({
        url: "/landpads",
        method: "GET",
      }),
    }),
    getOneLandPad: builder.query({
      query: (id) => ({
        url: `/landpads/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllLandPadsQuery, useGetOneLandPadQuery } = landpadAPI;
