import React, { useEffect, useState } from "react";
import axios from "axios";
import Test from "./Test";
import "./style.scss";

const userApiUrl = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  const [data, setData] = useState("");

  const getListData = () => {
    try {
      axios
        .get(userApiUrl)
        .then(function(response) {
          if (response && response.data) {
            setData(response.data);
          }
        })
        .catch(function(error) {
          console.log(error);
        })
        .then(function() {
          // always executed
        });
    } catch (e) {
      console.error(e, "Fetching data error");
    }
  };

  useEffect(() => {
    getListData();
  }, []);

  return <div>{(data && <Test data={data} />) || "Loading"}</div>;
}
