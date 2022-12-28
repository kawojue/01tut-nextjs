import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home() {
  return (
    <>
      <Head>
        <title>WebDev News</title>
        <meta name="keywords"
          content="web development, programming" />
      </Head>
      <ArticleList />
    </>
  )
}

// getStaticProps