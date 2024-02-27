import { useState } from "react";

const Signup = () => {
  const [signup, setSignup] = useState(false);

  const loginHandle = () => {
    alert("hello");
  };

  const signupHandle = () => {
    event.preventDefault();
    setSignup(true);
  };

  return (
    <div className="main flex justify-center items-center bg-gradient-to-bl from-[#31B7C2] to-[#7BC393] h-screen w-screen">
      <form className="form flex justify-center items-center absolute h-[50%] w-[50%] bg-slate-100 rounded-[20px] drop-shadow-md">
        {/* name input div  */}
        <h3 className=" absolute font-bold top-[8%] text-[30px] left-[40%] ">
          Sign Up
        </h3>

        <div className="name absolute h-[50px] w-[70%]  bg-slate-300 rounded-sm top-[26%]">
          <input
            type="text"
            placeholder="Name"
            className="relative bg-slate-300 mt-3 left-[30px] border-blue-500 "
          />
          <img
            src="src\assets\user.svg"
            className=" relative h-[30px] bottom-[25px] "
          />
        </div>

        {/* email input div */}
        <div className="name absolute h-[50px] w-[70%] bg-slate-300 rounded-sm top-[46%]">
          <input
            type="text"
            placeholder="Enter your mail"
            className="relative bg-slate-300 mt-3 left-[30px] border-blue-500 border-0"
          />
          <img
            src="src\assets\email.svg"
            className=" relative h-[25px] bottom-[23px] "
          />
        </div>

        {/* password input div */}
        <div className="name absolute h-[50px] w-[70%] bg-slate-300 rounded-sm top-[66%]">
          <input
            type="password"
            placeholder="Password"
            className="relative bg-slate-300 mt-3 left-[30px] border-blue-500 border-0"
          />
          <img
            src="src\assets\password.svg"
            className=" relative h-[25px] bottom-[23px] "
          />
        </div>

        <button
          onClick={signupHandle}
          className="absolute top-[88%] left-[35%]  w-[25%] h-[10%] bg-green-800 text-white rounded-lg"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
