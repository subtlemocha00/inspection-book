import './dashboard.css';

const DashboardButton = ({ name, image, showJobList, showDashboard }) => {

    const handleClick = (name) => {
        if (name === 'Search Jobs') {
            showJobList(true);
            showDashboard(false);
        }
    }
    return (
        <button key={name} className="card col-12 col-sm-5 col-md-5 my-3 mx-1 btn btn-outline-dark p-0" onClick={() => handleClick(name)}>
            <img src={image} className="card-img img-fit" height="250px"></img>
            <div className="card-img-overlay d-flex justify-content-center align-items-center">
                <span className="card-text text-white text-bold fs-1">{name}</span>
            </div>
        </button>
    )
}

export default DashboardButton;