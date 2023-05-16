import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICores } from "../../types/interface";

export const CoresAPI = createApi({
  reducerPath: "CoresAPI",
  tagTypes: ["Cores"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.spacexdata.com/v4/cores" }),
  endpoints: (builder) => ({
    getAllCores: builder.query<ICores[], undefined>({
      query: () => ``,
      providesTags: ["Cores"],
    }),
  }),
});

export const { useGetAllCoresQuery } = CoresAPI;
