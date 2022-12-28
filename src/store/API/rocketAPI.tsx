import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rocketAPI = createApi({
  reducerPath: "rocketAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v4",
  }),
  endpoints: (builder) => ({
    getAllRockets: builder.query({
      query: () => ({
        url: "/rockets",
        method: "GET",
      }),
    }),
    getOneRocket: builder.query({
      query: (id) => ({
        url: `/rockets/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllRocketsQuery, useGetOneRocketQuery } = rocketAPI;
