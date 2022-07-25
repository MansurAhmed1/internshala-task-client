/** @format */

import React from "react";
import updateIcon from "../Images/updateIcon.png";
import deleteIcon from "../Images/deleticon.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Table = ({ product,index }) => {
  const { name, img, price, qunatity, _id } = product;
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const procced = window.confirm("Are You sure Want to delete this product?");
    if (procced) {
      const url = `https://malalalaaaaaaa.herokuapp.com/deleteproducts/${id}`;
      fetch(url, {
        method: "DELETE"
      })
        .then((res) => res.json())
        .then((data) => {
          toast("product delete succesfully");
        });
    }
  };

  return (
    <tr>
         <th>{index+1}</th>
      <td>
        <img style={{ width: "50px", height: "50px" }} src={img} alt="" />
      </td>
      <th>{name}</th>
      <td>{price}</td>
      <th>{qunatity}</th>
      <th>
        <button
          onClick={() => {
            navigate(`/update/${_id}`);
          }}
        >
          {" "}
          <img
            style={{ height: "25px", width: "25px" }}
            src={updateIcon}
            alt=""
          />
        </button>
      </th>
      <td>
        <button
          onClick={() => {
            handleDelete(_id);
          }}
          class="  "
        >
          <img
            style={{ height: "25px", width: "25px" }}
            src={deleteIcon}
            alt=""
          />
        </button>
      </td>
    </tr>
  );
};

export default Table;
