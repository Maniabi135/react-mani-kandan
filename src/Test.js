import React, { useEffect, useState } from "react";
import InputSearch from "./InputSearch";

const Test = props => {
  const { data } = props;

  const [text, setText] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const filterSearchAction = value => {
    if (text) {
      const newArr = [];
      filteredData.filter(item => {
        if (item.name.toLowerCase().includes(text.toLowerCase())) {
          newArr.push(item);
        }
      });
      setFilteredData(newArr);
    }
  };

  const getInput = value => {
    setText(value);
  };

  const clearInput = () => {
    setText("");
    setFilteredData(data);
  };

  return (
    <div className="contentBody">
      <InputSearch
        filterCbk={filterSearchAction}
        setTextData={getInput}
        text={text}
      />
      <ul className="listBody">
        {filteredData && filteredData.length > 0
          ? filteredData.map(item => {
              return (
                <li data-email={item.email} key={item.id}>
                  <div>
                    <div className="img" />
                    <div>
                      <h4>{item.name}</h4>
                      <h6>{item.username}</h6>
                    </div>
                  </div>
                </li>
              );
            })
          : "No data Exists"}
      </ul>
      <button className="removeuser" type="button" onClick={clearInput}>
        Remove user
      </button>
    </div>
  );
};

export default Test;
