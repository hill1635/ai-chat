import React from "react";

function Search(props) {
    var search = (e) => {
        e.preventDefault();
    }

    return (
        <button className="searchBtn" type="submit" onClick={e => search(e)}>Search</button>
    );
}

export default Search;