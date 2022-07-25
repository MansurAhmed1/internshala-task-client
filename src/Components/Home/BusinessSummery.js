/** @format */

import React from "react";
// text-teal-300 
const BusinessSummery = () => {
  return (
    <div className="lg:my-36 ">
      <h1 className="lg:text-4xl text-2xl  w-11/12 mx-auto  font-bold text-center">
        Millions Business Trust Us
      </h1>

      {/* <h1 className="text-xl pt-2 font-bold text-center">
        TRY TO UNDERSTAND USER EXPECTATION
      </h1> */}
      <div  className="divider w-1/2   mx-auto"> </div>
      <div className="stats py-8 flex   mx-auto lg:w-11/12 w-4/5 justify-between stats-vertical lg:stats-horizontal rounded-none  shadow ">
        <div className="stat ">
          <div className="stat-figure text-primary">
            <img
              style={{ width: "40px", height: "40px" }}
              src="    https://cdn3.vectorstock.com/i/thumb-large/59/97/shop-basket-vector-41155997.jpg
     "
              alt=""
            />
          </div>
          <div className="stat-title ">Total Products</div>
          <div className="stat-value ">5M</div>
          <div className="stat-desc">40% more than last month</div>
        </div>
        <div className="stat ">
          <div className="stat-figure text-secondary">
            <img
              style={{ width: "40px", height: "40px" }}
              src="https://cdn-icons.flaticon.com/png/512/2435/premium/2435281.png?token=exp=1656418161~hmac=3334638b3f54b182d9c6a94827d2bb8b "
              alt=""
            />
          </div>
          <div className="stat-title">Total Order</div>
          <div className="stat-value text-primary">2.6 M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <img
              style={{ width: "40px", height: "40px" }}
              src="https://cdn.vectorstock.com/i/1000x1000/44/31/trolley-cart-sale-shop-market-buy-icon-vector-40844431.webp"
              alt=""
            />
          </div>
          <div className="stat-title">Served</div>
          <div className="stat-value text-primary">1M</div>
          <div className="stat-desc">1M Served this month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/10/10957.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="stat-value">47%</div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
