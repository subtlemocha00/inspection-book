import { useState } from "react";

const AddItem = ({ addItem }) => {

    const [time, setTime] = useState('');
    const [content, setContent] = useState('');

    const handleClick = () => {
        const newItem = {
            ...time && { time: time },
            ...content && { content: content },
        }
        addItem(newItem);
        setTime('');
        setContent('');
    }

    return (
        <div className="container my-3">
            <input name="time" type='text' placeholder="Time..." value={time} onChange={(e) => setTime(e.target.value)}></input>
            <input name="contentInput" type='text' placeholder="Content..." value={content} onChange={(e) => setContent(e.target.value)}></input>
            <button type="button" className="btn btn-dark" onClick={handleClick}>Add</button>
        </div>
    )
}

export default AddItem;