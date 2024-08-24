import { useState } from "react";

const AddItem = ({ addItem, currentListType }) => {

    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');

    const handleClick = () => {
        const newItem = {
            ...titleValue && { name: titleValue },
            ...descriptionValue && { description: descriptionValue },
        }
        addItem(newItem);
        setTitleValue('');
        setDescriptionValue('');
    }

    return (
        <div className="container my-3">
            <input name="titleInput" type='text' placeholder="Title..." value={titleValue} onChange={(e) => setTitleValue(e.target.value)}></input>
            <input name="descriptionInput" type='text' placeholder="Description..." value={descriptionValue} onChange={(e) => setDescriptionValue(e.target.value)}></input>
            <button className="btn btn-dark" onClick={handleClick}>Add</button>
        </div>
    )
}

export default AddItem;