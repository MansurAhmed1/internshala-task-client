/** @format */

import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

import "./Review.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 }
];

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);

  return (
    <div className=" my-10 mb-36">
      <div className="mx-auto  lg:w-11/12 w-full">
        <h1 className="lg:text-4xl text-2xl  font-bold py-12 text-center">
          What Our Customer Say
        </h1>
        <div className="">
          <Carousel breakPoints={breakPoints}>
            {reviews.map((review) => (
              <div className=" rounded reviewcard shadow-lg border m-0  p-2">
                <div className="flex  justify-between items-center">
                  <div className="flex items-center justify-start">
                    <div class="avatar">
                      <div class="w-16 h-16 border rounded-full">
                        <img src={review.img} alt="" />
                      </div>
                    </div>
                    <p className="ml-3 font-semibold">{review.name}</p>
                  </div>

                  <div class="rating hidden lg:block">
                    <input
                      type="radio"
                      name="rating-2"
                      class="mask mask-star-2 bg-violet-800"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      class="mask mask-star-2 bg-violet-800"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      class="mask mask-star-2 bg-violet-800"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      class="mask mask-star-2 bg-violet-800"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      class="mask mask-star-2 bg-violet-800"
                    />
                  </div>
                </div>
                <div className="py-4 text-justify">{review.review}</div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Review;
