import React from 'react';
import { useRouter } from 'next/router';
import Layout from "../components/Layout";

export default function SearchScreen() {
    const router = useRouter();
    const { query = 'all' } = router.query;

    return (
        <Layout title="Creo - search" >
                Search for : {query}
        </Layout>
    )
}