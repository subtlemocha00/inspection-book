import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import AddItem from "./AddItem";
7
const Notes = ({ entries }) => {

    const [entryList, setEntryList] = useState(entries)

    const addToList = (newItem) => {
        newItem.id = uuidv4();
        console.log(newItem)
        setEntryList(prevEntryList => [...prevEntryList, newItem]);
    }

    const removeFromList = (id) => {
        console.log(id)
        setEntryList(prevEntryList => prevEntryList.filter(item => item.id !== id));
    }

    useEffect(() => {
    }, [entryList]);

    return (
        <div className="">
            <AddItem addItem={addToList} />
            <ul className="p-0">
                {entryList.map((entry) => {
                    return (
                        <li key={entry.id} className="list-group list-group-horizontal">
                            <span className="list-group-item col-3 col-md-2 text-center text-md-end">{entry.time}</span>
                            <span className="list-group-item flex-fill">{entry.content}</span>
                            <button type="button" onClick={() => removeFromList(entry.id)}><i className="fa fa-close p-auto"></i></button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Notes;