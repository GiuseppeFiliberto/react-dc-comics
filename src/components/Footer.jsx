export default function Footer() {

    return (
        <>
            <footer className="text-white py-5" style={{ backgroundImage: "url(../img/footer-bg.jpg)", backgroundSize: "cover" }}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-4 d-flex">
                            <div className="col-4">
                                <h5>DC COMICS</h5>
                                <ul className="list-unstyled">
                                    <li>Characters</li>
                                    <li>Comics</li>
                                    <li>Movies</li>
                                    <li>TV</li>
                                    <li>Games</li>
                                    <li>Videos</li>
                                    <li>News</li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <h5>DC</h5>
                                <ul className="list-unstyled">
                                    <li>Terms Of Use</li>
                                    <li>Privacy Policy</li>
                                    <li>Ad Choices</li>
                                    <li>Advertising</li>
                                    <li>Jobs</li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <h5>SITES</h5>
                                <ul className="list-unstyled">
                                    <li>DC</li>
                                    <li>MAD Magazine</li>
                                    <li>DC Kids</li>
                                    <li>DC Universe</li>
                                    <li>DC Power Visa</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-8 d-flex justify-content-center">
                            <img src="../img/dc-logo-bg.png" alt="Dc logo" srcset="" width="400" />
                        </div>
                    </div>

                </div>

            </footer>
        </>
    );
};


