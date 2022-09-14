import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Intro from '../components/Intro';
import Career from '../components/Career';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

export async function getStaticProps({locale}) {
  return {
      props: {
          ...(await serverSideTranslations( locale, ['common'] )),
      }
  }
}

export default function Home(props) {
  const { locale } = useRouter();
  const { t } = useTranslation('common');

  return (
    <Layout title={null} 
      description="Maamoun Grissa - Web Developer" 
      tags={["maamoun", "grissa", "web", "developer", "développeur", "مبرمج", "website", "application", "mobile", "pwa", "Knowledge", "Innovation"]} 
    >
      <Intro classes={styles} />
      <Career classes={styles} />
      <Skills classes={styles} />
      <Projects classes={styles} />
    </Layout>
  )
}
