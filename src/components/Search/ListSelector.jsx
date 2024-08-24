const ListSelector = ({ setCurrentListType }) => {
    const handleClick = (e, listType) => {
        setCurrentListType(listType);
        document.querySelectorAll('.btn-group > .btn').forEach(button => button.classList.remove('active'));
        e.target.classList.add('active');
    }
    return (
        <div className="container my-3">
            <span className="mx-3">Choose Your List:</span>
            <div className="btn-group">
                <button id="checklist" type="button" className="btn btn-dark active" onClick={(e) => handleClick(e, "checklist")}>Checklist</button>
                <button id="appointments" type="button" className="btn btn-dark" onClick={(e) => handleClick(e, "appointments")}>Appointments</button>
                <button id="items" type="button" className="btn btn-dark" onClick={(e) => handleClick(e, "items")}>Item List</button>
                <button id="cards" type="button" className="btn btn-dark" onClick={(e) => handleClick(e, "cardList")}>Card List</button>
            </div>
        </div>
    )
}

export default ListSelector;