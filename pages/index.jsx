import Head from 'next/head'

export default function Home({ articles }) {
  console.log(articles)
  return (
    <>
      <Head>
        <title>WebDev News</title>
        <meta name="keywords"
          content="web development, programming" />
      </Head>
      <div>
        {articles.map(article => {
          <h3 className="text-black">
            {article.title}
          </h3>
        })}
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()
  return {
    props: {
      articles
    }
  }
}