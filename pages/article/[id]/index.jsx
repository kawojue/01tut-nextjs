import Link from 'next/link'
import { useContext } from 'react'
import Context from '../../../components/Context'
import ArticleStyles from '../../../styles/Article.module.css'

const Article = ({ article }) => {
    const { title, body } = article
    const { err, isLoading } = useContext(Context)

    if (err) {
        return (
            <>
                <h1>{err}</h1>
            </>
        )
    }

    if (isLoading) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )
    }

    return (
        <main className={ArticleStyles.main}>
            <h3>{title}</h3>
            <p>{body}</p>

            <Link href="/">go back</Link>
        </main>
    )
}


export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()
    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const articles = await res.json()
    const paths = articles.map(article => `/article/${article.id}`)

    return { paths, fallback: false }
}

export default Article
