import { useState } from "react";
import useAuthUser from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const URL = "https://fakestoreapi.com/auth/login";

  const {login} = useAuthUser();
  const navigate = useNavigate();

  const handleName = (event) => {
    const newName = event.target.value;
    setName(newName);
  };

  const handlePassword = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const credentials = {
      username: name,
      password: password,
    };

    try {
      const response = await axios.post(URL, credentials);
      if (response.status === 200) {
        const token = response.data.token;
        login(token);
        navigate("/");
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      throw error;
    }
  };

  return (
    <div className="main flex justify-center items-center bg-gradient-to-bl from-[#31B7C2] to-[#7BC393] h-screen w-screen">
      <form className="form flex justify-center items-center absolute h-[50%] w-[50%] bg-slate-100 rounded-[20px] drop-shadow-md">
        <h3 className=" absolute font-bold top-[8%] text-[30px] left-[42%] ">
          Login
        </h3>

        {/* name input div  */}
        <div className="name absolute h-[50px] w-[70%]  bg-slate-300 rounded-sm top-[30%]">
          <input
            type="text"
            placeholder="Name"
            className="relative bg-slate-300 mt-3 left-[30px] border-blue-500 w-[50%]"
            onInput={handleName}
          />
          <img
            src="src\assets\user.svg"
            className=" relative h-[30px] bottom-[25px] "
          />
        </div>

        {/* password input div */}
        <div className="name absolute h-[50px] w-[70%] bg-slate-300 rounded-sm top-[50%]">
          <input
            type="password"
            placeholder="Password"
            className="relative bg-slate-300 mt-3 left-[30px] border-blue-500 border-0 w-[50%]"
            onInput={handlePassword}
          />
          <img
            src="src\assets\password.svg"
            className=" relative h-[25px] bottom-[23px] "
          />
        </div>

        <button
          onClick={(e) => {
            handleLogin(e);
          }}
          className="absolute top-[80%] left-[18%] w-[25%] h-[10%] bg-green-800 text-white rounded-lg hover:bg-green-500"
        >
          Login
        </button>

        <button className="absolute top-[80%] left-[55%]  w-[25%] h-[10%] bg-green-800 text-white rounded-lg">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
