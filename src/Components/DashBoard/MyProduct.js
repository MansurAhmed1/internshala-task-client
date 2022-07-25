/** @format */


import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Loading";
import Table from "./Table";



const MyProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user] = useAuthState(auth);




  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://malalalaaaaaaa.herokuapp.com/myproducts?email=${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setProducts(data);
        });
    }
  }, [user, products]);

  if(loading){
    return <Loading></Loading>
}


  return (
    <div>
      <div className="overflow-x-auto mb-36">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No:</th>
              <th>IMAGE</th>
              <th>Name</th>
              <th>Product price</th>
              <th>Product QUANTITY</th>
              <th>UPDATE </th>
              <th>DELETE </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => <Table key={index} index={index} product={product}></Table>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
