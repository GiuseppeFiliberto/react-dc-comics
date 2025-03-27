export default function Header({ links }) {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
                    <div className="container">
                        <a className="logo p-2" href="#">
                            <img src="../img/dc-logo.png" alt="DC Logo" width="80" />
                        </a>
                        <ul>
                            {links.map((link, index) => (
                                <li key={index}><a href={link.url}>{link.text}</a></li>
                            ))}


                        </ul>
                    </div>
                </nav>

            </header>
        </>

    )
}