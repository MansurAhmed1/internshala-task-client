/** @format */

import React from "react";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Emailvarification = () => {
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  return (
    <div
      style={{ height: "60vh" }}
      className="flex flex-col justify-center items-center mb-36"
    >
      <h3 className="text-red-500 text-2xl ">your email is not varified</h3>
      <h4 className="text-black font-semibold">Please Verify Your Email</h4>
      <button
        className="  border border-black bg-violet-800 text-white mt-4 btn"
        onClick={async () => {
          await sendEmailVerification();

          toast("Sent email");
        }}
      >
        send email varification
      </button>
      <ToastContainer />
    </div>
  );
};

export default Emailvarification;
