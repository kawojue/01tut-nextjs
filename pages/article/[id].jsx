import Link from 'next/link'
import { server } from '../../config/index'
import ArticleStyles from '../../styles/Article.module.css'

const Article = ({ article }) => {
    const { title, body } = article

    return (
        <main className={ArticleStyles.main}>
            <h3>{title}</h3>
            <p>{body}</p>
            <Link href="/">go back</Link>
        </main>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/article/${context.params.id}`)
    const article = await res.json()
    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json()
    const paths = articles.map(article => `/article/${article.id}`)

    return { paths, fallback: false }
}

export default Article
