import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders = {
    headers: {
              'X-RapidAPI-Key': 'b694300ee9msh5fc9c2dc297e686p1af7eajsn1b5f6443b337',
              'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
}

const baseUrl= 'https://coinranking1.p.rapidapi.com/coins';

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

  export const cryptoApi = createApi({
      reducerPath: 'cryptoApi',
      baseQuery: fetchBaseQuery({baseUrl}),
      endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
      })
  });

  export const {
    useGetCryptosQuery,
  } =cryptoApi;