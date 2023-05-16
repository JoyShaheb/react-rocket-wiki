import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICapsule } from "../../types/interface";

export const CapsulesAPI = createApi({
  reducerPath: "CapsulesAPI",
  tagTypes: ["Capsules"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v4/capsules",
  }),
  endpoints: (builder) => ({
    getAllCapsules: builder.query<ICapsule[], undefined>({
      query: () => `/`,
      providesTags: ["Capsules"],
    }),
  }),
});

export const { useGetAllCapsulesQuery } = CapsulesAPI;
