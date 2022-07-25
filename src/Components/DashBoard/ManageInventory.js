/** @format */


import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import "react-toastify/dist/ReactToastify.css";
import Table from "./Table";
import Loading from "../Loading";

const ManageInventory = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user] = useAuthState(auth);

 

  useEffect(() => {
    fetch("https://malalalaaaaaaa.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProducts(data);
      });
  }, [user, products]);

  if(loading){
    return <Loading></Loading>
  }
  return (
    <div>
      <div className="overflow-x-auto mb-36">
        <table className="table w-full">
          <thead className="w-full">
            <tr>
              <th>No:</th>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>PRODUCT QUANTITYy</th>
              <th>UPDATE</th>
              <th>DELETE </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <Table key={index} product={product} index={index}></Table>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageInventory;


