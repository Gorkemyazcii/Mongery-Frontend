import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
  reducerPath: 'api', 
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }), 
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => 'orders', 
    }),
  }),
});

export const { useGetOrdersQuery } = apiSlice; 
export default apiSlice;
