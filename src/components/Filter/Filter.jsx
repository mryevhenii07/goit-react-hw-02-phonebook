import React from "react";

const Filter = ({ filter, onSearchFilter }) => {
  return (
    <>
      <h4>Find contact</h4>
      <input
        onChange={onSearchFilter}
        type="text"
        name=""
        id=""
        value={filter}
      />
    </>
  );
};

export default Filter;
