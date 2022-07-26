/** @format */

import { useState } from "react";
import { useAuthState, useUpdatePassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const UpdatePassword = () => {
  const [user] = useAuthState(auth);
  const [password, setPassword] = useState("");
  console.log(password);
  console.log(typeof password);
  const [updatePassword, updating, error] = useUpdatePassword(auth);
console.log(password,updatePassword, updating, error)
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (updating) {
    return <p>Updating...</p>;
  }
  return (
    <div className="App ">
      <div className="pt-14">
        <input
          className=" p-2 py-3 border border-black"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn hover:bg-black mx-5 text-white  hover:text-white   bg-violet-800"
          onClick={async () => {
            await updatePassword(user?.email);
            alert("Updated password");
          }}
        >
          Update password
        </button>
      </div>
      
    </div>
  );
};
export default UpdatePassword;
