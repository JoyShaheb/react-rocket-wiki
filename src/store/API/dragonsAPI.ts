import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IDragon } from "../../types/dragon.interface";

export const DragonAPI = createApi({
  reducerPath: "DragonAPI",
  tagTypes: ["Dragons"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v4/dragons",
  }),
  endpoints: (builder) => ({
    getAllDragons: builder.query<IDragon[], undefined>({
      query: () => ``,
      providesTags: ["Dragons"],
    }),
  }),
});

export const { useGetAllDragonsQuery } = DragonAPI;
