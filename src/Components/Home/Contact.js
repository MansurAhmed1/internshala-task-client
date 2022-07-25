
import React from "react";


const Contact = () => {
  return (
    <div className="  pt-5 py-14 my-15 ">
      <h1 className="lg:text-4xl text-2xl text-black font-bold text-center pb-2">
        Stay connected with us
      </h1>
      <div className="  px-2 mb-10 w-11/12 lg:w-11/12 mx-auto flex flex-col-reverse lg:grid grid-cols-2 ">
        <div>
          <div className="text-center pb-14 text-white"></div>
          <div className="grid   grid-cols-1 justify-items-center gap-5">
            <input
              type="text"
              placeholder="Email Address"
              className="input w-full max-w-md border border-black"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input w-full max-w-md  border border-black"
            />
            <textarea
              className="textarea w-full max-w-md   border border-black"
              placeholder="Your message"
              rows={4}
            ></textarea>
            <input
              type="submit"
              className="btn lg:w-4/5 border w-full  border-black hover:bg-white px-10  bg-violet-800 test-white"
              value="Submit"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-4/5  h-4/5 mt-14"
            src="https://keyword-hero.com/wp-content/uploads/2017/04/contact-the-hero-1024x744.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;