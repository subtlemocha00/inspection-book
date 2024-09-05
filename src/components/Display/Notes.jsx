import { useEffect, useState } from "react";

const Notes = ({ entries }) => {

    useEffect(() => {
    }, [entries]);

    return (
        <ul className="list-group">
            {entries.map((entry) => {
                return (
                    <li key={entry.id} className="list-group-item container row">
                        <span className="col-3 col-md-2">{entry.time}</span>
                        <span className="col-9 col-md-10">{entry.content}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default Notes;