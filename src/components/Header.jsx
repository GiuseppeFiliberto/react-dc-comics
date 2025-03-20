export default function Header() {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
                    <div className="container">
                        <a className="logo p-2" href="#">
                            <img src="../img/dc-logo.png" alt="DC Logo" width="80" />
                        </a>
                        <ul className="navbar-nav ms-auto nav-ul p-3">
                            <li><a href="#">CHARACTERS</a></li>
                            <li><a href="#">COMICS</a></li>
                            <li><a href="#">MOVIES</a></li>
                            <li><a href="#">CHARACTERS</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">GAMES</a></li>
                            <li><a href="#">COLLECTIBLES</a></li>
                            <li><a href="#">VIDEOS</a></li>
                            <li><a href="#">FANS</a></li>
                            <li><a href="#">NEWS</a></li>
                            <li><a href="#">SHOP</a></li>

                        </ul>
                    </div>
                </nav>

            </header>
        </>

    )
}