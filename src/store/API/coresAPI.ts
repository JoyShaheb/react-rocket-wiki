import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICores } from "../../types/cores.interface";

export const CoresAPI = createApi({
  reducerPath: "CoresAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.spacexdata.com/v4/cores" }),
  endpoints: (builder) => ({
    getAllCores: builder.query<ICores[], undefined>({
      query: () => ``,
    }),
  }),
});

export const { useGetAllCoresQuery } = CoresAPI;
