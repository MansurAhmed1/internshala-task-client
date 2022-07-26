/** @format */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../firebase.init";

const Update = () => {
  const [user] = useAuthState(auth);

  const { id } = useParams();

  const [update, setupdate] = useState(null);

  useEffect(() => {
    fetch(`https://malalalaaaaaaa.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setupdate(data));
  }, [update, id]);

  // ////////////////////////product update function///////////////////
  const handleQunatitySubmit = (e) => {
    e.preventDefault();

    const updateQuantity = {
      quantity: e.target.quantity.value
    };
    console.log(updateQuantity);
    const url = `https://malalalaaaaaaa.herokuapp.com/updatequantity/${id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updateQuantity)
    })
      .then((res) => res.json())
      .then((result) => {
        toast("Quantity update succesfully");
        e.target.reset();
      });
  };

  // ////////////////////////product update function///////////////////

  // ////////////////////////price update function///////////////////
  const handlePriceSubmit = (e) => {
    e.preventDefault();
    const updatePrice = {
      price: e.target.price.value
    };
    const url = `https://malalalaaaaaaa.herokuapp.com/updateprice/${id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatePrice)
    })
      .then((res) => res.json())
      .then((result) => {
        e.target.reset();
        toast("Price update succesfully");
      });
  };
  // ////////////////////////price update function///////////////////

  return (
    <div className=" mb-14 ">
      <h2 className="text-2xl pt-4 text-center font-semibold ">UPDATE ITEM</h2>

      <div
        className=" grid lg:grid-cols-2  grid-cols-1 mx-auto "
        style={{ width: "90%" }}
      >
        <div>
          <div
            style={{ border: "1px solid black" }}
            className="card  mt-12 card-side bg-base-100 py-5 d-flex lg:flex-row flex-col border-none rounded-none"
          >
            <img src={update?.img} style={{ height: "250px" }} alt="Movie" />
            <div class="card-body text-left">
              <h2 class="card-title">{update?.name} </h2>
              <h2 class="card-title text-primary">{update?.price} $</h2>
              <div className="font-semibold py-0 mb-3">
                Quantity: <span className="font-bold">{update?.qunatity}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center my-4 items-center">
            <form
              onSubmit={handleQunatitySubmit}
              style={{ width: "60%" }}
              action=""
              className="grid grid-cols-1 gap-y-3 "
            >
              <div className="flex  flex-col">
                <h1 className="text-center text-2xl font-semibold  mb-3">
                  UPDATE QUANTITY
                </h1>
                <input
                  className=" p-2 border border-black"
                  type="number"
                  name="quantity"
                  id="quantity"
                  placeholder="Update Quantity"
                  required
                />
              </div>

              <input
                className="btn hover:bg-violet-800 w-full text-white  hover:text-white  px-11 bg-black"
                type="submit"
                value="UPDATE QUANTITY"
              />
            </form>
            <form
              onSubmit={handlePriceSubmit}
              style={{ width: "60%" }}
              action=""
              className="grid grid-cols-1 gap-y-3 mt-8"
            >
              <div className="flex  flex-col">
                <h1 className="text-center text-2xl font-semibold  mb-3">
                  UPDATE PRICE
                </h1>
                <input
                  className=" p-2 border border-black"
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Update Price"
                  required
                />
              </div>

              <input
                // className="btn w-full btn-primary bg-stone-700  hover:bg-stone-700 text-white"
                className="btn hover:bg-violet-800 w-full text-white  hover:text-white  px-11 bg-black"
                type="submit"
                value="UPDATE PRICE"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
