import {useState} from 'react';
import { useAuthState, useUpdatePassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const UpdatePassword = () => {
  const [password, setPassword] = useState('');
  const [updatePassword, updating, error] = useUpdatePassword(auth);
const [user]=useAuthState(auth)
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
    <div className="App">
        <h1 className=' mt-10 font-semibold text-2xl'>Update Password</h1>
      <div className='py-5'>
      <input
      className=' lg:px-6 px-16 py-2 border border-black'
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
       className="btn hover:bg-violet-800 ml-5  mt-5 lg:mt-0 text-white  hover:text-white  px-11 bg-black"
        onClick={async () => {
          await updatePassword(user?.email);
          alert('Updated password');
        }}
      >
        Update password
      </button>
      </div>
    </div>
  );
};
export default UpdatePassword