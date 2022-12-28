import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shipsAPI = createApi({
  reducerPath: "shipsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v4",
  }),
  endpoints: (builder) => ({
    getAllShips: builder.query({
      query: () => ({
        url: "/ships",
        method: "GET",
      }),
    }),
    getOneShip: builder.query({
      query: (id) => ({
        url: `/ships/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllShipsQuery, useGetOneShipQuery } = shipsAPI;
