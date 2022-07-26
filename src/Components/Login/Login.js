/** @format */

import React, { useEffect, useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import useToken from "../Hooks/useToken";
import Loading from "../Loading";
import {sendPasswordResetEmail} from "firebase/auth";
// import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [email, setEmail] = useState("");

  // const [sendPasswordResetEmail, sending, resetError] =
  //   useSendPasswordResetEmail(auth);

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, emailError] =
    useSignInWithEmailAndPassword(auth);

  const [token] = useToken(user || gUser);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (emailError || gError) {
    signInError = (
      <p className="text-red-500">
        <small>{emailError?.message || gError?.message}</small>
      </p>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(email, data.password);
  };
  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth,email).then(() => {
      toast("send email")
    }).catch((error)=> {
      toast(error.message)
      })
  };
  return (
    <div
      style={{ height: "95vh" }}
      className="flex  -mt-24 lg:-mt-0 justify-center items-center"
    >
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" w-full max-w-xs">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                required
                name="email"
                id="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                // {...register("email", {
                //   required: {
                //     value: true,
                //     message: "Email is Required"
                //   },
                //   pattern: {
                //     value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                //     message: "Provide a valid Email"
                //   },

                // })}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required"
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer"
                  }
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            {signInError}
            <input
              className="btn w-full max-w-xs text-white"
              type="submit"
              value="Login"
            />
          </form>
          <p className="flex justify-between">
            <p>
              {" "}
              <button onClick={handlePasswordReset}>
                <small className="text-red-500">Reset Password </small>
              </button>
            </p>
            <p>
              {" "}
              <small>
                <Link className="text-primary" to="/register">
                  Create New Account
                </Link>
              </small>
            </p>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
