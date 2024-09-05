const Entry = ({ id, time, content }) => {
    console.log(time, content)
    return (
        <li key={id} className="list-group-item">
            <span>{time}</span>
            <span>{content}</span>
        </li>
    );
}

export default Entry;