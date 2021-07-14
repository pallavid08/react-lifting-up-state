import React from "react";

function Search(props) {
  const { search, change } = props;
  return (
    <div>
      <input
        value={search}
        type="text"
        placeholder="Type here..."
        onChange={change}
      />
    </div>
  );
}

export default Search;
