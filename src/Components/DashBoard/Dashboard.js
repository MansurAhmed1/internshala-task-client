/** @format */

import React from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { Outlet } from "react-router-dom";

import CustomLink from "../../CustomLink/CustomLink";

const Dashboard = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content text-left  ">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side  " style={{ borderRight: "1px solid black" }}>
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu bg-white p-4 overflow-y-auto w-60  ">
          <li>
            <CustomLink
              className=" px-2 py-1  text-black  headerAnchor "
              to="/dashboard"
            >
              Manage Inventory
            </CustomLink>
          </li>
          <li>
            <CustomLink
              className=" px-2 py-1  text-black  headerAnchor "
              to="/dashboard/myproduct"
            >
              My Product
            </CustomLink>
          </li>
          <li>
            <CustomLink
              className=" px-2 py-1  text-black  headerAnchor "
              to="/dashboard/addproduct"
            >
              Add Product
            </CustomLink>
          </li>

       

          <>
            <li>
              <CustomLink
                className=" px-2 py-1  text-black  headerAnchor "
                to="/dashboard/addreview"
              >
                Add Review
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className=" px-2 py-1  text-black  headerAnchor "
                to="/dashboard/updateprofile"
              >
                Update Profile
              </CustomLink>
            </li>
        
          </>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
