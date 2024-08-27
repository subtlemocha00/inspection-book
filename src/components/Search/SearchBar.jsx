import { useState } from "react";

const SearchBar = ({ data, onSearchResult }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = () => {
        // Perform the search using the id property
        const result = data.find(item => item.number === searchInput.trim());
        if (result) {
            onSearchResult(result);
        } else {
            console.log('No item found with the provided ID.');
        }
    };

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Search by Job Number..."
                value={searchInput}
                onChange={handleInputChange}
            />
            <button
                className="btn btn-dark w-auto"
                type="button"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;