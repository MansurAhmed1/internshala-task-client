/** @format */

import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddProduct from "./Components/DashBoard/AddProduct";
import AddReview from "./Components/DashBoard/AddReview";
import Dashboard from "./Components/DashBoard/Dashboard";
import ManageInventory from "./Components/DashBoard/ManageInventory";
import MyProduct from "./Components/DashBoard/MyProduct";
import Error404 from "./Components/Error404/Error404";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Update from "./Components/Product/Update";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Footer from "./Components/Footer/Footer";
import RequireAuth from "./Components/RequireAuth";
import Blog from "./Components/Blog";
import UpdatePassword from "./Components/DashBoard/UpdatePassword";

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route
          path="/update/:id"
          element={
            <RequireAuth>
              <Update></Update>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<ManageInventory></ManageInventory>}></Route>
          <Route
            path="myproduct"
            element={
              <RequireAuth>
                {" "}
                <MyProduct></MyProduct>{" "}
              </RequireAuth>
            }
          ></Route>
          <Route
            path="addproduct"
            element={
              <RequireAuth>
                {" "}
                <AddProduct></AddProduct>{" "}
              </RequireAuth>
            }
          ></Route>
          <Route
            path="addreview"
            element={
              <RequireAuth>
                {" "}
                <AddReview></AddReview>
              </RequireAuth>
            }
          ></Route>

         <Route path="updateprofile" element={<UpdatePassword></UpdatePassword>}></Route>
        </Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
