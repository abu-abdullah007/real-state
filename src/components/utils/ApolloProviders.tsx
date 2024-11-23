"use client"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://michiley.com/api/endpoint/graphql',
    cache: new InMemoryCache(),
})

export default function ApolloProviders({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
}
