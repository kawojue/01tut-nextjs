import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const index = () => {
    const router = useRouter()
    const { id } = router.query
    const [article, setArticle] = useState({})

    const getArticle = async (id) => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const data = await res.json()
            setArticle(data)
        } catch {

        }
    }

    useEffect(() => {
        (async () => await getArticle(id))()
    }, [])

    console.log(article)

    return (
        <main>

        </main>
    )
}

export default index