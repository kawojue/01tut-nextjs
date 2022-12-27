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

// export const getStaticProps = async () => {
//   try {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//     const articles = await res.json()
//     return {
//       props: {
//         articles
//       }
//     }
//   } catch { }
// }