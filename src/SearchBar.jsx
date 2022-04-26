import React from "react";

const SearchBar = ({ handleCheck, search, setSearch }) => {
    return (
        <div className="border-2 border-blue-400 pl-2 pt-2">
            <input
                onChange={(e) => setSearch(e.target.value)}
                className="border-2 outline-none pl-1"
                type="search"
                placeholder="Search..."
                value={search}
            />
            <div className="flex my-2 items-center">
                <input
                    className="mr-2"
                    onChange={handleCheck}
                    type="checkbox"
                />
                <p className="">Only show products in stock</p>
            </div>
        </div>
    );
};

export default SearchBar;
