import { useState } from "react";

const Crew = () => {

    const [isOpen, setIsOpen] = useState(true);
    let buttonText = 'fa fa-chevron-up';
    isOpen ? buttonText = 'fa fa-chevron-up' : buttonText = 'fa fa-chevron-down';

    return (
        <div className="p-3">
            <button name="toggleCrew" type="button" onClick={() => setIsOpen(!isOpen)}>
                <i className={buttonText}></i>
            </button>
            <label className="ms-3" htmlFor="toggleCrew" >Crew/Equipment</label>
            {isOpen &&
                (<>
                    <h5>Crew:</h5>
                    <ul className="list-group m-3">
                        <li className="list-group-item">1 - Foreman</li>
                        <li className="list-group-item">2 - Labourers</li>
                        <li className="list-group-item">3 - Operators</li>
                    </ul>
                    <h5>Equipment:</h5>
                    <ul className="list-group m-3">
                        <li className="list-group-item">CAT 323 Excavator</li>
                        <li className="list-group-item">CAT 336 Excavator</li>
                        <li className="list-group-item">CAT Front-end Loader</li>
                        <li className="list-group-item">CAT Dozer</li>
                    </ul>
                </>)
            }
        </div>
    )
}

export default Crew;