export default function Header() {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
                    <div className="container">
                        <a className="logo p-2" href="#">
                            <img src="../img/dc-logo.png" alt="DC Logo" width="80" />
                        </a>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#">CHARACTERS</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">COMICS</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">MOVIES</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">TV</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">GAMES</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">COLLECTIBLES</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">VIDEOS</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">FANS</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">NEWS</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">SHOP</a></li>
                        </ul>
                    </div>
                </nav>

            </header>
        </>

    )
}