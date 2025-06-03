import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dogApi = createApi({
    reducerPath: "dogApi",
    baseQuery: fetchBaseQuery({ 
        baseUrl:"https://api.thedogapi.com/v1",
        prepareHeaders: (headers) => {
            headers.set(
                "x-api-key",
                "live_ LcsCe2SQjmANrwAXBvqQpbw1Z9upTQ y3FmgW7dBcjlAjqo0lW378lJPI0TpE RWsg"
            );
            return headers
        }
    }),
    endpoints: (build) => ({
        getRacas: build.query<any[], void>({
            query: () => ({
                url: "/breeds?limit=10&page=0",
                params: {
                    language: "pt-BR",
                    page: 0,
                    limit: 10,
                },
            }),
        }),
    }),
});

export const { useGetRacasQuery } = dogApi