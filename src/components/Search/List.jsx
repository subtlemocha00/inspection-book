import { useState, useEffect } from "react";

const List = ({ items, setItemList, removeItem, handleSearchResult, handleSelection }) => {
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

    // const toggleActive = (key) => {
    //     setListItems(prevItems =>
    //         prevItems.map((item) =>
    //             item.id === key ? { ...item, isActive: !item.isActive } : item
    //         )
    //     );
    //     setItemList(prevItems =>
    //         prevItems.map((item) =>
    //             item.id === key ? { ...item, isActive: !item.isActive } : item
    //         )
    //     );
    //     handleSearchResult(item.id)
    // }

    return (
        <div className="container p-0">
            <ul className="list-group">
                {listItems.map((item) => {
                    let classList = 'list-group-item'
                    item.isActive ? classList = 'list-group-item bg-dark border-0 ' + 'active' : classList = 'list-group-item bg-light border-0';
                    let buttonClassList = 'btn btn-dark col-auto m-auto';
                    item.isActive ? buttonClassList = 'btn btn-light col-auto m-auto' : buttonClassList = 'btn btn-dark col-auto m-auto';
                    let cardClassList = 'card m-auto text-center m-3 col-4';
                    return (item.img ? (
                        <li key={item.id} className={cardClassList} onClick={() => toggleActive(item.id)}>
                            <div className="card-body">
                                {item.img && <img className="card-img-top w-auto m-auto" src={item.img} height={200} width={200} />}
                                <h4 className="card-title w-auto">{item.name}</h4>
                                {item.description && <p className="card-title m-auto">{item.description}</p>}
                            </div>
                        </li>) : (
                        <li key={item.id} className={classList} onClick={() => handleSelection(item.id)}>
                            <div className="m-0 row">
                                <div className="col">
                                    <div className="row">
                                        <h5 className="col-auto">{item.number}</h5>
                                        <h5 className="col">{item.name}</h5>
                                    </div>
                                    <h6>{item.city}</h6>
                                    {/* {item.img && <img src={item.img} height={200} />} */}
                                </div>
                                {/* <button className={buttonClassList} onClick={() => removeItem(item.id)}>X</button> */}
                            </div>
                        </li>)
                    )
                })}
            </ul>
        </div>
    )
}

export default List;