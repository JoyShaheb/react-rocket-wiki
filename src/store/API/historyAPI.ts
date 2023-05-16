import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IHistory } from "../../types/history.interface";

export const HistoryAPI = createApi({
  reducerPath: "HistoryAPI",
  tagTypes: ["History"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v4/history",
  }),
  endpoints: (builder) => ({
    getAllHistories: builder.query<IHistory[], undefined>({
      query: () => ``,
      providesTags: ["History"],
    }),
  }),
});

export const { useGetAllHistoriesQuery } = HistoryAPI;
