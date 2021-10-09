import React from "react";

function Search() {
  return (
    <form action="/" method="get">
      <label class="search-bar">
        <span className="visually-hidden">Search by City/Zipcode</span>
      </label>
      <input type="text" id="header-search" placeholder="Search " name="s" />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
