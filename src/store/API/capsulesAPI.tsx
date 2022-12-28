import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const capsulesAPI = createApi({
  reducerPath: "capsulesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v4",
  }),
  endpoints: (builder) => ({
    getAllCapsules: builder.query({
      query: () => ({
        url: "/capsules",
        method: "GET",
      }),
    }),
    getOneCapsule: builder.query({
      query: (id) => ({
        url: `/capsules/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllCapsulesQuery, useGetOneCapsuleQuery } = capsulesAPI;
