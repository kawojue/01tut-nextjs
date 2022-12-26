import ArticleItem from './ArticleItem'
import ArticleStyles from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
    return (
        <article>
            {articles.map(article => (
                <ArticleItem key={article.id} {...article} />
            ))}
        </article>
    )
}

export default ArticleList