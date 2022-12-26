import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1 className={headerStyles.title}>
                <span>WebDev</span>News
            </h1>
            <p className={headerStyles.description}>
                Keep up to date with latest Web Dev News.
            </p>
        </header>
    )
}

export default Header