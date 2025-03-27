export default function Main({ src, title, }) {
    return (
        <div className="comic-card">
            <img src={src} alt="" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    )
}