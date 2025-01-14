import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const crytpoApiHeaders = {
    'X-RapidAPI-Key': 'fe34de7ba3mshce930d7c78d6880p10b211jsndd95d48d48ac',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
   }

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) =>({ url, headers: crytpoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timeperiod}) => createRequest(`coin/${coinId}/history?timePeriod=${timeperiod}`),
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
    })
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery,  useGetExchangesQuery } = cryptoApi;
