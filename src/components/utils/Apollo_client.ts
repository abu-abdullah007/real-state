import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://michiley.com/api/endpoint/graphql',
    cache: new InMemoryCache(),
})
