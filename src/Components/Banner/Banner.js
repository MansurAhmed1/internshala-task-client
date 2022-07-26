/** @format */

import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="lg:grid  flex  flex-col-reverse lg:grid-cols-2 grid-cols-1 w-11/12 mx-auto py-5">
      <div className="px-5 bannermain ">
        <h1 className="lg:text-4xl text-2xl text-black font-bold mt-8 lg:mt-12">
          <span className=""> Your</span> next car
        </h1>
        <h1 className="lg:text-4xl text-2xl text-violet-800 font-bold mt-1">
          Your safe future
        </h1>
        <p className="py-4 text-justify text-black ">
          Good CAr will make your future very beautiful. You do not have to buy
          the car again and again. So you can save your money and get a good car
          at a comfortable price.You will find all kinds of BK pages on our
          website very easily. If there is a problem with any equipment within 2
          months, we will at least warrenty it. You will not get this
          opportunity anywhere else.We arrange our products to reach our
          customers as soon as possible. You can see all our products here if
          you want. Order the necessary equipment now without delay. We are
          ready to serve you.
        </p>
        <button className="btn bg-violet-800 text-white lg:px-6 px-16 rounded-none  hover:bg-white hover:text-black  hover:border-black">
          See Products
        </button>
      </div>
      <div className="flex justify-center lg:itemFs-end  items-center">
        <img
          className=" lg:ml-5 bannerImage"
          src="https://editorial.pxcrush.net/carsales/general/editorial/6-iv.jpg?width=1024&height=683"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
