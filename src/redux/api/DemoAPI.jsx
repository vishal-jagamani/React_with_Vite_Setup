import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const DemoAPI = createApi({
    reducerPath: 'demoAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://catfact.ninja' }),
    endpoints: (builder) => ({
        getCatFacts: builder.query({
            query: (query) => query
        })
    })
});

export const { useGetCatFactsQuery } = DemoAPI;
