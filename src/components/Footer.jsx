export default function Footer() {

    return (
        <>
            <footer className="text-white" style={{ backgroundImage: "url(../img/footer-bg.jpg)", backgroundSize: "cover" }}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-4 d-flex mt-5 pb-5">
                            <div className="col-4">
                                <h5 className="fw-bolder">DC COMICS</h5>
                                <ul className="list-unstyled">
                                    <li>Characters</li>
                                    <li>Comics</li>
                                    <li>Movies</li>
                                    <li>TV</li>
                                    <li>Games</li>
                                    <li>Videos</li>
                                    <li>News</li>
                                </ul>
                                <h5 className="fw-bolder">SHOP</h5>
                                <ul className="list-unstyled">
                                    <li>Characters</li>
                                    <li>Comics</li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <h5 className="fw-bolder">DC</h5>
                                <ul className="list-unstyled">
                                    <li>Terms Of Use</li>
                                    <li>Privacy Policy</li>
                                    <li>Ad Choices</li>
                                    <li>Advertising</li>
                                    <li>Jobs</li>
                                    <li>Terms Of Use</li>
                                    <li>Privacy Policy</li>
                                    <li>Ad Choices</li>
                                    <li>Advertising</li>
                                    <li>Jobs</li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <h5 className="fw-bolder">SITES</h5>
                                <ul className="list-unstyled">
                                    <li>DC</li>
                                    <li>MAD Magazine</li>
                                    <li>DC Kids</li>
                                    <li>DC Universe</li>
                                    <li>DC Power Visa</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-8 d-flex justify-content-center position-relative overflow-hidden">
                            <img src="../img/dc-logo-bg.png" alt="Dc logo" srcset="" width="490" className="position-absolute bigger-logo" />
                        </div>
                    </div>

                </div>

            </footer>
            <footer className="bottom-footer">
                <div className="container d-flex p-5 text-white justify-content-between align-items-center">
                    <button className="btn btn-primary">SIGN-UP NOW!</button>
                    <div className="d-flex gap-2 align-items-center p-4">
                        <h5 className="mb-0">FOLLOW US</h5>
                        <img src="../img/footer-facebook.png" alt="Facebook" width="30" className="mx-2" />
                        <img src="../img/footer-twitter.png" alt="twitter" width="30" className="mx-2" />
                        <img src="../img/footer-youtube.png" alt="youtube" width="30" className="mx-2" />
                        <img src="../img/footer-pinterest.png" alt="pinterest" width="30" className="mx-2" />
                        <img src="../img/footer-periscope.png" alt="periscope" width="30" className="mx-2" />
                    </div>
                </div>
            </footer>
        </>
    );
};


