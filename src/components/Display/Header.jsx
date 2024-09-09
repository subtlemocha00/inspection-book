import { useEffect } from "react";

const Header = ({ job }) => {
    useEffect(() => {
        console.log(job)
    }, [job])
    return (
        <div className="container">
            <div className="">
                <span>Job Name: {job.name}</span>
                <span>Date</span>
            </div>
            <span>Working Day: {job.workingDay}</span>
        </div>
    )
}

export default Header;