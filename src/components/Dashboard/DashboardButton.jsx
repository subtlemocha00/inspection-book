const DashboardButton = ({ name, image }) => {
    return (
        <div key={name} className="card col-auto my-3">
            <img src={image} className="img-top" height={250} width={250}></img>
            <span className="card-text">{name}</span>
        </div>
    )
}

export default DashboardButton;