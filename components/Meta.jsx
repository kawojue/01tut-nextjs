import Head from "next/head"

const Meta = ({ keywords, title, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta charset="UTF-8" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="keywords" content={description} />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
    )
}

Meta.defaultProps = {
    title: 'WebDev Newz',
    keywords: 'Web Development, Programming, Coding',
    description: 'Get the latest Web Dev news'
}

export default Meta