import { useEffect, useState } from "react";

const SearchBar = ({ data, onSearchResult }) => {

    const [jobList, setJobList] = useState(data);
    const [searchInput, setSearchInput] = useState('');

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    // useEffect to filter results based on search input
    useEffect(() => {
        if (searchInput.trim() !== '') {
            // Filter the data array based on the search input
            const filteredResults = data.filter(item =>
                item.number.toString().toLowerCase().includes(searchInput.toLowerCase().trim())
            );
            onSearchResult(filteredResults);
        } else {
            // If the search input is empty, return all data
            onSearchResult(data);
        }
    }, [searchInput, data, onSearchResult]);

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Search by Job Number..."
                value={searchInput}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchBar;