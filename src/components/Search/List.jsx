import { useState, useEffect } from "react";

const List = ({ items, setItemList, showDashboard, showJobList, handleSearchResult, handleSelection }) => {

    const [listItems, setListItems] = useState(items.map(item => ({
        ...item,
        isActive: item.isActive !== undefined ? item.isActive : false
    })));

    useEffect(() => {
        setListItems(items.map(item => ({
            ...item,
            isActive: item.isActive !== undefined ? item.isActive : false
        })));
    }, [items]);

    const backButton = () => {
        showJobList(false);
        showDashboard(true);
    }

    return (
        <div className="container p-0">
            <button className="btn btn-dark col-auto m-auto" onClick={() => backButton()}>Back</button>
            <ul className="list-group">
                {listItems.map((item) => {
                    let classList = 'list-group-item'
                    item.isActive ? classList = 'list-group-item bg-dark border-0 ' + 'active' : classList = 'list-group-item bg-light border-0';
                    {/* let buttonClassList = 'btn btn-dark col-auto m-auto';
                    item.isActive ? buttonClassList = 'btn btn-light col-auto m-auto' : buttonClassList = 'btn btn-dark col-auto m-auto'; */}
                    let cardClassList = 'card m-auto text-center m-3 col-4';
                    return (
                        <li key={item.id} className={classList} onClick={() => handleSelection(item.id)}>
                            <div className="m-0 row">
                                <div className="col">
                                    <div className="row">
                                        <h5 className="col-auto">{item.number}</h5>
                                        <h5 className="col">{item.name}</h5>
                                    </div>
                                    <h6>{item.city}</h6>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default List;