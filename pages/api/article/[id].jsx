import { articles } from '../../../data'

export default function handler({ query: { id } }, res) {
    // const { id } = req.query
    const getIArticle = articles.find(article => article.id === id)

    if (getIArticle) {
        res
            .status(200)
            .json(getIArticle)
    } else {
        res
            .status(404)
            .json({ message: `Article with the ID: ${id} could not be found.` })
    }
}