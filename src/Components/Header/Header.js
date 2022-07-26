/** @format */

import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import CustomLink from "../../CustomLink/CustomLink";
const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const [navTrigger, setNavTrigger] = useState(false);
  console.log(navTrigger);

  return (
    <header
      style={{ borderBottom: "1px solid black" }}
      className=" py-6 bg-white  sticky top-0 z-30 "
    >
      <nav className="w-full lg:w-11/12 mx-auto relative lg:px-1 px-5 ">
        <div className="flex justify-between items-center">
          <div className="navLeft flex items-center ">
            <div>
              <button className=" w-8 h-8 block lg:hidden hover:bg-transparent bg-transparent  border-0 rounded-none">
                <label for="my-drawer-2" tabindex="1" class=" drawer-button  ">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/747/747327.png"
                    style={{ width: "28px" }}
                    alt=""
                  />
                </label>
              </button>
            </div>
            <div>
             <h3 className="font-bold  text-black text-2xl text-center ml-8 lg:ml-0 ">DHAKAIYA </h3>
            </div>
          </div>
          <div className="navRight">
            <div className=" hidden lg:block ">
              <div className="flex ">
                <CustomLink
                  className="mx-2 px-2 py-1  text-black  headerAnchor "
                  to={"/"}
                >
                  Home
                </CustomLink>
              
                <CustomLink
                  className="mx-2 px-2 py-1  text-black  headerAnchor "
                  to={"/blog"}
                >
                  Blog
                </CustomLink>
                {user && (
                  <CustomLink
                    className="mx-2 px-2 py-1  text-black headerAnchor  "
                    to="/dashboard"y

                  >
                    Dashboard
                  </CustomLink>
                )}
                {user ? (
                  <button
                    className="btn signOutButton border  ml-3 border-white text-white bg-slate-800 hover:text-slate-800 hover:bg-white  inline-block px-3 py-2  rounded-none  btn-sm"
                    onClick={logout}
                  >
                    Sign Out
                  </button>
                ) : (
                  <CustomLink
                    className="mx-2 px-2 py-1  headerAnchor  "
                    to="/login"
                  >
                    Login
                  </CustomLink>
                )}
              </div>
            </div>
            <div
              className="block toggleButton lg:hidden w-8 h-8"
              onClick={() => {
                setNavTrigger(!navTrigger);
              }}
            >
              <img
                src={
                  navTrigger
                    ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2s7S6S9_VT_S8oAl8vKD7A4Be-4JxxFeysw&usqp=CAU"
                    : "https://cdn-icons-png.flaticon.com/128/1828/1828551.png"
                }
                className="w-8 h-8 "
                alt="menuicon"
              />
            </div>
          </div>
        </div>
        <div
          className={`smallMenu block z-40 lg:hidden pb-5    w-full absolute left-0 top-16 ${
            navTrigger ? "block" : "hidden"
          }  `}
        >
          <div className="grid grid-cols-1 py-5 gap-y-6 text-center  shadow-lg bg-white ">
            <CustomLink
              className="mx-2 px-4 w-52 py-2 inline-block text-lg headerAnchor "
              to={"/"}
            >
              Home
            </CustomLink>
         
            <CustomLink
              className="mx-2 px-4 inline-block w-52 py-2 text-lg headerAnchor "
              to={"/blog"}
            >
              Blog
            </CustomLink>
            {user && (
              <CustomLink
                className="mx-2 px-4 inline-block w-52 py-2 text-lg headerAnchor "
                to="/dashboard"
              >
                Dashboard
              </CustomLink>
            )}
            {user ? (
              <button
                className="btn mx-4   signOutButton border border-white text-white bg-slate-800 hover:text-slate-800 hover:bg-white  inline-block px-3 h-10  rounded-none  btn-sm"
                onClick={logout}
              >
                Sign Out
              </button>
            ) : (
              <CustomLink
                className="mx-2 px-4 inline-block w-52 py-2 text-lg headerAnchor "
                to="/login"
              >
                Login
              </CustomLink>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
