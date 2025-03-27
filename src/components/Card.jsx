export default function Main({ src, title, artists, writers, price }) {
    return (
        <div className="comic-card">
            <img src={src} alt="" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}