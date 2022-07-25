/** @format */


import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product}) => {

  const {
    _id,
    name,
    price,
    img,
    qunatity
  } = product;



  return (
    <div class="card relative  border-gray-200 border bg-white drop-shadow-xl rounded-none">
      <figure class="px-10 pt-10 pb-2 flex justify-center items center">
        <img
          src={img}
          alt="Shoes"
          style={{ height: "200px" }}
          className="rounded-xl "
        />
      </figure>
      <div className=" items-center pt-8   text-left">
        <h2 className="card-title uppercase px-4">{name}</h2>
        <p className="font-semibold px-4 text-left text-lg text-blue-600">
          {price} $
        </p>
        <p className="px-4  pb-8">Quantity: <span className="font-bold">{qunatity}</span> Pcs</p>

    
        <div className="card-actions mt-12 ">
          <Link className="btn hover:bg-black absolute left-0 bottom-0 hover:text-white  btn-block rounded-none px-11 bg-violet-800 text-white" to={`update/${_id}`}>  
            <button className="">UPDATE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
