import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <header className={headerStyles.title}>
            <h1>
                <span>WebDev</span>News
            </h1>
        </header>
    )
}

export default Header