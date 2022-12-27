import Context from './Context'
import { useContext } from 'react'
import ArticleItem from './ArticleItem'
import ArticleStyles from '../styles/Article.module.css'

const ArticleList = () => {
    const { err, isLoading, articles } = useContext(Context)

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
        <article className={`lg:grid-cols-3 md:grid-cols-2 ${ArticleStyles.list}`}>
            {articles.map(article => (
                <ArticleItem key={article.id} {...article} />
            ))}
        </article>
    )
}

export default ArticleList