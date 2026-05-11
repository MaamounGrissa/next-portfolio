import React from 'react';
import { useRouter } from 'next/router';
import Layout from "../components/Layout";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}

export default function SearchScreen() {
    const router = useRouter();
    const { t } = useTranslation('common');
    const { query = 'all' } = router.query;

    return (
        <Layout title={t('search_title')}>
                {t('search_results_for')} {query}
        </Layout>
    )
}