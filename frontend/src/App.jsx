import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [data, setData] = useState([]);
  const url = "http://localhost:3000/";

  const fetchInfo = () => {
    return axios.get(url).then((response) => setData(response.data));
  };

  useEffect(() => {
    fetchInfo();
  }, [url]);

  return (
    <>
      <center>
        <h1 className="m-3">Products</h1>
      </center>
      <ul id="mainList">
        <ul>
          <li>
            <h3>ID</h3>
          </li>
          <li>
            <h3>Name</h3>
          </li>
          <li>
            <h3>Image</h3>
          </li>
          <li>
            <h3>Quantity</h3>
          </li>
          <li>
            <h3>Price</h3>
          </li>
        </ul>
        {data.map((element) => (
          <ProductItem key={element.id} data={element} />
        ))}
      </ul>
    </>
  );
}

// Extracting a separate component for each product item

const ProductItem = ({ data }) => (
  <ul>
    <li>{data.id}</li>
    <li>{data.name}</li>
    <li>
      <img src={data.image} alt={data.name} />
    </li>
    <li>{data.quantity}</li>
    <li>{data.price}Rs</li>
  </ul>
);

export default App;
