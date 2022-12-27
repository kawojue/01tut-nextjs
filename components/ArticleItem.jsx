import Link from 'next/link'
import ArticleStyles from '../styles/Article.module.css'

const ArticleItem = ({ id, title, body }) => {
    return (
        <Link href="/article/[id]" as={`/article/${id}`}
            className={ArticleStyles.card}>
            <h3 className={ArticleStyles.title}>
                {title} &rarr;
            </h3>
            <p className={ArticleStyles.body}>
                {body}
            </p>
        </Link>
    )
}

export default ArticleItem