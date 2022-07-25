
/** @format */

import React from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast} from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import auth from "../firebase.init";




const AddReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const [user] = useAuthState(auth);


  //// //////////////imgbb api key////////////////////
  const imageStorageKey = "4295ac4d47b569312bea67b440cdbdbb";
  //// //////////////imgbb api key////////////////////


  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    //img bb er example call theke nichi
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;

          const review = {
            name: user?.displayName,
            email: user?.email,
            review: data.review,
            img: img
          };

          // send to your database

          const url = "https://malalalaaaaaaa.herokuapp.com/reviews";
          fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(review)
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast("Review added successfully");
                reset();
              } else {
                toast("Failed to add the doctor");
              }
            });
        }
      });
  };

  return (
    <div className="mb-36">

      <h2 className="text-2xl text-center font-semibold py-6">
        Add Your Review
      </h2>
      <div className="flex justify-center items-center">
        <form
          style={{ width: "60%" }}
          className=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-control w-full  ">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full border border-black"
              value={user?.displayName}
              disabled
              {...register("name", {})}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full ">
            <input
              type="email"
              value={user?.email}
              disabled
              placeholder="Your Email"
              className="input input-bordered w-full border border-black "
              {...register("email", {})}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full ">
            <textarea
              placeholder="Your Review"
              className="textarea w-full border border-black "
              {...register("review", {
                required: {
                  value: true,
                  message: "Review is Required"
                }
              })}
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full "
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is Required"
                }
              })}
            />
            <label className="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.image.message}
                </span>
              )}
            </label>
          </div>

          <input className="btn w-full  text-white" type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
};

export default AddReview;


