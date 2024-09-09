import { useEffect, useState } from "react";
import Crew from "./Crew";
import Header from "./Header";
import Notes from "./Notes";
import { entryList } from "./entryList";


const JobPage = ({ item }) => {
    const [entries, setEntries] = useState(entryList);
    console.log(entries)
    return (
        <>
            <button className="btn btn-dark" >BACK</button>
            <form className="container">
                <Header job={item} />
                <Crew />
                <Notes entries={entries} />
            </form>
        </>
    )
}

export default JobPage;