export default function Main() {

    return (
        <>
            <div className="bg-dark">
                <div className="container text-white py-5">
                    <h4 className="fw-bolder">--&gt; Content goes here &lt;--</h4>
                </div>
            </div>

            {/* // Blue Section */}

            <div className="blue-banner-info text-white py-5">
                <div className="container d-flex justify-content-around">
                    <div className="d-flex align-items-center gap-3">
                        <img src="../img/buy-comics-digital-comics.png" alt="Digital Comics" width="50" />
                        <span>DIGITAL COMICS</span>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <img src="../img/buy-comics-merchandise.png" alt="DC Merchandise" width="50" />
                        <span>DC MERCHANDISE</span>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <img src="../img/buy-comics-subscriptions.png" alt="Subscription" width="50" />
                        <span>SUBSCRIPTION</span>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <img src="../img/buy-comics-shop-locator.png" alt="Shop locator" width="40" />
                        <span>COMIC SHOP LOCATOR</span>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <img src="../img/buy-dc-power-visa.svg" alt="Power Visa" width="50" />
                        <span>DC POWER VISA</span>
                    </div>
                </div>
            </div>

        </>
    )
}