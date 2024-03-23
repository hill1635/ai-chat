import React from "react";
import API from "../../utils/UserAPI";

function Search(props) {
    var search = (e) => {
        e.preventDefault();
    }

    return (
        <button className="searchBtn" type="submit" onClick={e => search(e)}>Search</button>
    );
}

export default Search;