import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dogApi = createApi({
  reducerPath: "dogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1",
    prepareHeaders: (headers) => {
      const apiKey = process.env.NEXT_PUBLIC_DOG_API_KEY;

      if (!apiKey) {
        throw new Error("A chave da API está faltando em .env.local");
      }

      headers.set("x-api-key", apiKey);
      return headers;
    },
  }),
  endpoints: (build) => ({
    getRacas: build.query<any[], { page: number; limit: number }>({
      query: ({ page, limit }) => ({
        url: "/breeds",
        params: {
          language: "pt-BR",
          page,
          limit,
        },
      }),
    }),
    getImagesById: build.query<any, string>({
      query: (imageId) => ({
        url: `/images/${imageId}`,
        params: {
          language: "pt-BR",
          page: 0,
          limit: 10,
        },
      }),
    }),
  }),
});

export const { useGetRacasQuery, useGetImagesByIdQuery } = dogApi;
