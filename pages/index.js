import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
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
  return (
    <Layout>
      <Intro classes={styles} />
      <Career classes={styles} />
      <Skills classes={styles} />
      <Projects classes={styles} />
    </Layout>
  )
}
