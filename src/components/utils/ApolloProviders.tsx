"use client"
import { ApolloProvider } from '@apollo/client';
import { client } from './Apollo_client';


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
