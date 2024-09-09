import { useState, useEffect } from "react";

export const SearchResult = ({ item, isJobSelected, openJob, showJobList }) => {

    let cardClassList = 'card m-auto text-center m-3 col-4 border btn btn-dark';

    const handleJobOpen = () => {
        openJob(true);
        isJobSelected(false);
        showJobList(false);
    }

    return (
        <div className="container">
            <button className="btn btn-dark" onClick={() => isJobSelected(false)}>BACK</button>
            <div className="container p-0" onClick={() => handleJobOpen(item.id)}>
                <div key={item.id} className={cardClassList} >
                    <div className="card-body">
                        <h4 className="card-title w-auto">{item.name}</h4>
                        <hr />
                        <h6>Job Number</h6>
                        <span className="card-title m-auto">{item.number}</span>
                        <h6>Start Date</h6>
                        <span><em>{item.startDate}</em></span>
                        <h6>Working Day</h6>
                        <span><em>{item.workingDay} / {item.workingDays}</em></span>
                        <hr />
                        <h6>Description</h6>
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
