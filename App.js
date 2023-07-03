import { Table } from "antd";
import ProductDetails from "./components/ProductDetails";
import { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [columns, setColumns] = useState([
    {
      title: "ID",
      dataIndex: "id",
      render: (text, record) => (
        <Link to={`/product/${record.id}`}>{text}</Link>
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Rating",
      dataIndex: "rating",
    },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      render: (value, record) => (
        <Link to={`/product/${record.id}`}>
          <img
            src={value}
            alt={`Image ${record.id}`}
            style={{ maxWidth: "150px" }}
          />
        </Link>
      ),
    },
  ]);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => {
        setDataSource(result.products);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Table columns={columns} dataSource={dataSource} />}
        />
        {/* <Table columns={columns} dataSource={dataSource} /> */}

        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
