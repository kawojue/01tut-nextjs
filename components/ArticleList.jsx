import ArticleItem from './ArticleItem'
import ArticleStyles from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
    return (
        <article className={`lg:grid-cols-3 md:grid-cols-2 ${ArticleStyles.list}`}>
            {articles.map(article => (
                <ArticleItem key={article.id} {...article} />
            ))}
        </article>
    )
}

export default ArticleList