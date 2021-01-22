import React, { useEffect, useState } from "react";

const InputSearch = props => {
  const { filterCbk, setTextData, text } = props;

  const changeInput = e => {
    setTextData(e.currentTarget.value);
  };

  return (
    <div className="inputSearch">
      <input
        type="text"
        placeholder="Search by name"
        name="inputSearch"
        onChange={e => changeInput(e)}
        value={text}
      />
      <button type="button" onClick={filterCbk}>
        Search
      </button>
    </div>
  );
};

export default InputSearch;
